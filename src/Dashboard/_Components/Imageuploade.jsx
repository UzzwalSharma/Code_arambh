import React, { useState } from "react";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";
import { WandSparkles, ChevronDown } from "lucide-react";
import { Listbox } from "@headlessui/react";
import axios from "axios";
import Loader from "/Loader/Loader.jsx";
import { generateResponse } from "/Ai models/Open_route.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useUser } from "@clerk/clerk-react"; // Import Clerk's user hook



const aiModels = [
  { name: "Gemini", img: "/Google_Bard_logo.svg - Copy.png", model_name: "google/gemini-2.0-pro-exp-02-05:free" },
  { name: "Deepseek", img: "/deepseek.png", model_name: "google/gemini-exp-1206:free" },
  { name: "Meta LLM", img: "/meta.png", model_name: "meta-llama/llama-3.2-11b-vision-instruct:free" },
  { name: "Gemini 2.0 PRO", img: "/Pro gemini.jpg", model_name: "google/gemini-2.0-flash-thinking-exp-1219:free" },
];

function ImageUpload() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(""); // Dynamic loading message
  const [response, setResponse] = useState(""); 
  const [description, setDescription] = useState("");
const navigate = useNavigate();
const { user } = useUser(); // Get user info from Clerk
const userName = user ? `${user.firstName} ${user.lastName}` : "Anonymous"; // Use full name or fallback
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    console.log("📂 Image Selected:", file);
    setLoadingMessage("Uploading your image, please wait...");
    setLoading(true); 

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "kb9n4w2j"); 
    formData.append("folder", "pixora_uploads"); 

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dvmqxb8kd/image/upload",
        formData
      );

      setImage(response.data.secure_url);
      console.log("✅ Image Uploaded to Cloudinary:", response.data.secure_url);
    } catch (error) {
      console.error("❌ Upload Failed:", error);
    } finally {
      setLoading(false); 
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleConvertToCode = async () => {
    if (!selectedModel) {
      toast.error("Please select an AI model");
      return;
    }
  
    setLoadingMessage("Generating code, please wait...");
    setLoading(true);
  
    try {
      const aiResponse = await generateResponse(userName,description, image, selectedModel.model_name);
      console.log("🚀 Full AI Response:", aiResponse);
  
      // ✅ Ensure aiResponse is valid
      if (!aiResponse || !aiResponse._id) {
        toast.error("No ID received for the generated code.");
        console.error("❌ No ID received for the generated code.", aiResponse);
        return;
      }
      toast.success("Code generated successfully!");
      // ✅ Navigate to the generated code page
      navigate(`/generated-code/${aiResponse._id}`);
    } catch (error) {
      console.error("❌ Error getting AI response:", error);
      toast.error("Error getting AI response:", error);
    } finally {
      setLoading(false);
    }
  };
  
  
  
  

  return (
    <div className="mt-10 flex flex-col items-center">
      <Loader loading={loading} message={loadingMessage} /> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        
        {/* Image Upload Box */}
        <label className="relative p-7 border-2 border-dashed rounded-xl shadow-xl flex flex-col items-center justify-center
          cursor-pointer transition-all duration-300 hover:border-green-500 hover:shadow-2xl w-full h-72 
          bg-white backdrop-blur-md bg-opacity-30 border-gray-300">
          {image ? (
            <div className="relative w-full h-full">
              <img
                src={image}
                alt="Uploaded"
                className="w-full h-full object-cover rounded-xl transition-opacity duration-300 opacity-100 shadow-md"
              />
              {/* Remove Button */}
              <button
                onClick={handleRemoveImage}
                className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-2 shadow-lg hover:bg-red-600 transition-all"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-3 text-gray-400">
              <FaCloudUploadAlt className="text-6xl text-green-400 transition-opacity duration-300 opacity-100" />
              <p className="text-lg font-medium text-gray-600">
                Click or Drag to Upload
              </p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          )}
        </label>

        {/* User Input Box */}
        <div className="p-6 border rounded-xl shadow-2xl bg-white bg-opacity-30 backdrop-blur-lg h-72 flex flex-col space-y-4">
          {/* AI Model Selection */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Select AI Model
            </h2>
            <Listbox value={selectedModel} onChange={setSelectedModel}>
              <div className="relative mt-2">
                <Listbox.Button className="w-full p-3 border border-green-300 rounded-md bg-white shadow-sm flex items-center space-x-3 text-white font-bold hover:border-green-500">
                  {selectedModel ? (
                    <>
                      <img src={selectedModel.img} alt={selectedModel.name} className="w-6 h-6" />
                      <span>{selectedModel.name}</span>
                    </>
                  ) : (
                    <span className="text-white">Choose AI Model</span> 
                  )}
                  <ChevronDown className="ml-auto text-white" />
                </Listbox.Button>

                <Listbox.Options className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg">
                  {aiModels.map((model) => (
                    <Listbox.Option
                      key={model.name}
                      value={model}
                      className={({ active }) =>
                        `cursor-pointer flex items-center p-3 space-x-3 ${active ? "bg-green-100" : ""}`
                      }
                    >
                      <img src={model.img} alt={model.name} className="w-6 h-6" />
                      <span>{model.name}</span>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>
          {/* Title */}
          <h2 className="text-lg font-bold text-gray-800">
            Enter Description About Your Webpage
          </h2>

          {/* Text Area for Description */}
          <textarea
            placeholder="Enter a description..."
            className="w-full h-full p-4 border rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none 
              text-gray-700 resize-none bg-gray-100 shadow-inner"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      {/* Convert to Code Button */}
      <div className="mt-10">
        <button
          className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg
          hover:bg-green-600 transition-all"
          onClick={handleConvertToCode}
        >
          <WandSparkles className="w-5 h-5 text-white transition-all duration-300" />
          Convert to Code
        </button>
      </div>
    </div>
  );
}

export default ImageUpload;
