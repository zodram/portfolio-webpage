import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { projectDescriptions } from "@/data/data";
import dotenv from 'dotenv'; 

dotenv.config(); 

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// Instantiation
const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "text-embedding-004",
  taskType: TaskType.RETRIEVAL_DOCUMENT,
  title: "Portfolio",
});

// Get text from projects with adding project number
const text = projectDescriptions
  .map(
    (project, index) =>
      `Project ${index + 1}:\n 
        Title: ${project.title}\n
        Description: ${project.description}\n
        Long Description: ${project.longDescription}\n
        Images: ${project.images.join(", ")}\n
        Technologies: ${project.technologies.join(", ")}\n
        Features: ${project.features.join(", ")}\n
        Github/Gitlab address: ${project.github}\n
        Live Demo: ${project.demo}\n
      `
  )
  .join("\n\n");

// Create a vector store
const vectorStore = await MemoryVectorStore.fromDocuments(
  [{ pageContent: text, metadata: {} }],
  embeddings
);

export async function POST(req: Request) {
  try {
    const message = await req.json();

    if (!process.env.GOOGLE_API_KEY) {
      return Response.json(
        { error: "Google API key not configured" },
        { status: 500 }
      );
    }

    // Ensure vector store is initialized
    if (!vectorStore) {
      return Response.json(
        { error: "Vector store not initialized" },
        { status: 500 }
      );
    }

    // Get relevant documents from vector store
    const retriever = vectorStore.asRetriever(1);
    const retrievedDocuments = await retriever.invoke(`${message}`);
    const context = retrievedDocuments[0].pageContent;

    // Create a prompt that includes the context
    const prompt = `Context: 
                    ${context}
                    \n\n
                    Question: 
                    ${message}
                    \n\n
                    You are a software engineer looking for a job. 
                    You are asked to provide a relevant, accurate, brief and easy to understand response based on the context provided.
                    If the question is not clear or irrelevant to you or your projects, you can ask for clarification.
                    The response should be in the first-person point of view. If possible, provide a bulleted list of key points with using "\n" as a separator.
                    `;

    // Generate response using Gemini
    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    return Response.json({ response });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};