import axios from "axios";
import PROMPTS from "/Ai models/PROMPTS.jsx"; // Importing the optimized prompt file

export async function generateResponse(userDescription, imageUrl, model) {
  try {
    console.log("🟢 Received Params:");
    console.log("User Description:", userDescription);
    console.log("Image URL:", imageUrl);
    console.log("Model:", model);

    // Merge the optimized prompt with the user's wireframe description
    const finalPrompt = `${PROMPTS.PROMPT}\n\nUser Description: ${userDescription}`;

    // ✅ Send request in the format the backend expects
    const requestBody = {
      imageUrl: imageUrl,
      userName: "Test User",
      modelName: model,
      prompt: finalPrompt,
    };

    console.log("📤 Sending Request:", requestBody);

    // Send request to the backend
    const response = await axios.post("https://pixora-s-backend.onrender.com/openrouter", requestBody, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("🚀 AI Response:", response.data); 

    // ✅ Return the full response object (including `_id`)
    return response.data;  
  } catch (error) {
    console.error("❌ Error generating response:", error.message);
    return null;
  }
}


