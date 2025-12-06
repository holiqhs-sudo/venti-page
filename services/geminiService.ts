import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedContent } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateEventDescription = async (eventName: string, eventType: string, vibe: string): Promise<GeneratedContent> => {
  if (!apiKey) {
    // Fallback if no API key is present, to allow UI preview
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          tagline: `Experience the ultimate ${vibe} ${eventType}: ${eventName}!`,
          description: `Join us for ${eventName}, a premier ${eventType} designed to inspire and connect. Whether you're looking for ${vibe} vibes or professional growth, this event brings together the best in the industry. Don't miss out on this transformative experience!`
        });
      }, 1500);
    });
  }

  try {
    const prompt = `
      Create a compelling marketing tagline and a short, exciting description (approx 50 words) for an event.
      Event Name: "${eventName}"
      Event Type: "${eventType}"
      Desired Vibe: "${vibe}"
      
      The output must be JSON.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            tagline: { type: Type.STRING, description: "A catchy, short marketing hook" },
            description: { type: Type.STRING, description: "A compelling 2-3 sentence event summary" }
          },
          required: ["tagline", "description"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as GeneratedContent;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Graceful degradation
    return {
      tagline: `Unleash the potential of ${eventName}`,
      description: `We are crafting the perfect description for your ${eventType}. Please try again later or sign up to use our full suite of AI tools.`
    };
  }
};