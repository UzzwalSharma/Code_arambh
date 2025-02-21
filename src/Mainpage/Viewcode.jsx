import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./_Components/Header";
import UserSection from "./_Components/UserSection";
import CodeEditor from "./_Components/CodeEditor";
import SubscriptionPopup from "./_Components/SubscriptionPopup";

function Viewcode() {
  const { id } = useParams();
  const [code, setCode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // New states for user information
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch generated code based on ID
    console.log("Fetching generated code for ID:", id);
    axios.get(`https://pixora-s-backend.onrender.com/generated-code/${id}`)
      .then((response) => {
        console.log("✅ API Response:", response.data);
        setCode(response.data.generatedCode);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error fetching generated code:", error);
        setError("Failed to fetch the generated code.");
        setLoading(false);
      });

    // Fetch user info from GitHub if token exists
    const token = localStorage.getItem("github_token");
    if (token) {
      axios
        .get("https://api.github.com/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(response => setUser(response.data))
        .catch(error => console.error("❌ Error fetching GitHub user:", error));
    }
  }, [id]); // Run once when `id` changes

  const handleGitHubConnect = () => {
    const clientId = "Ov23lifnqo04raYYUC9r";
    const redirectUri = "https://pixora-s-frontend.vercel.app/github-oauth-callback";

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo&redirect_uri=${redirectUri}`;
  };

  const handlePushToGitHub = async () => {
    const token = localStorage.getItem("github_token");

    if (!token) {
      alert("Please connect to GitHub first.");
      return;
    }

    if (!user) {
      alert("Please connect to GitHub first.");
      return;
    }

    const repoName = "pixora-generated-code"; // Desired repo name
    const filePath = `generated_code_${id}.js`; // Unique filename
    const content = btoa(code); // Encode code in Base64 for GitHub API

    try {
      // Check if repo exists, if not create one
      try {
        await axios.put(
          `https://api.github.com/repos/${user.login}/${repoName}/contents/${filePath}`,
          {
            message: `Added generated code: ${id}`,
            content,
          },
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
      } catch (repoError) {
        if (repoError.response && repoError.response.status === 404) {
          // Repo doesn't exist, create it first
          await axios.post(
            `https://api.github.com/user/repos`,
            {
              name: repoName,
              private: false, // or true based on your needs
            },
            {
              headers: {
                Authorization: `token ${token}`,
              },
            }
          );
          // Retry pushing code after repo is created
          await axios.put(
            `https://api.github.com/repos/${user.login}/${repoName}/contents/${filePath}`,
            {
              message: `Added generated code: ${id}`,
              content,
            },
            {
              headers: {
                Authorization: `token ${token}`,
              },
            }
          );
        } else {
          throw repoError;
        }
      }

      alert("✅ Code pushed to GitHub successfully!");
    } catch (error) {
      console.error("❌ Error pushing code to GitHub:", error);
      alert("❌ Failed to push code.");
    }
  };



 // Open subscription popup
 const handleVerify = () => {
  setShowPopup(false);
  window.open(
    "https://meet.jit.si/Pixora-Expert-Ujjwal", // Your Jitsi meeting URL
    "_blank",
    "width=1000,height=700"
  );
};

  return (
    <div className="flex flex-col min-h-screen">
    <Header />
  
    <div className="grid grid-cols-1 md:grid-cols-5 p-5 flex-grow gap-8">
      {/* Sidebar */}
      <div className="md:col-span-1">
        <UserSection />
        {/* GitHub User Section */}
        {user ? (
          <div className="mt-4 text-center">
            <h3 className="font-bold text-xl">Welcome, {user.login}! <br /><h4>This is your Pixora Panel</h4></h3>
            <img
              src={user.avatar_url}
              alt="User Avatar"
              className="rounded-full w-20 h-20 mx-auto border-4 border-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        ) : (
          <button
            onClick={handleGitHubConnect}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-lg hover:from-gray-600 hover:to-gray-800 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l-7 7 7 7zm3 0V6l7 7-7 7z" />
            </svg>
            <span>Connect to GitHub</span>
          </button>
        )}
      </div>
  
      {/* Main Content */}
      <div className="col-span-4">
        <CodeEditor code={code} />
      </div>
    </div>
  
    {/* User Panel (80vw, Horizontal) with GitHub Details */}
    <div className="w-[80vw] bg-white rounded-lg  p-6 flex flex-col md:flex-row justify-between items-center mx-auto mt-6 border-2 border-green-400 shadow-[0_0_15px_#00ff00]">
    <button
          onClick={() => setShowPopup(true)}
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg hover:from-green-500 hover:to-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17l5 5m0 0l-5 5m5-5H10a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2h-2z"/>
          </svg>
          <span>Start Expert Call</span>
        </button>
  {user ? (
    <>
      {/* GitHub User Info */}
      <div className="flex items-center gap-4">
        <img
          src={user.avatar_url}
          alt="GitHub Avatar"
          className="w-16 h-16 rounded-full border-2 border-gray-300"
        />
        <div>
          <h3 className="text-lg font-bold">{user.name || user.login}</h3>
          <p className="text-gray-600">{user.bio || "No bio available"}</p>
          <div className="text-sm text-gray-500">
            <p>👥 Followers: {user.followers} | Following: {user.following}</p>
            <p>📂 Public Repos: {user.public_repos}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-4 md:mt-0">
     

      <button
  onClick={handlePushToGitHub}
  disabled={loading}
  className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center space-x-2 ${
    loading ? "opacity-50 cursor-not-allowed" : ""
  }`}
>
  {loading ? (
    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m-8-8h16" />
    </svg>
  )}
  <span>{loading ? "Pushing..." : "Push to GitHub"}</span>
</button>

      </div>
    </>
  ) : (
    <div className="text-center">
      <p className="text-gray-600">Please connect your GitHub account to see user details.</p>
    </div>
  )}
</div>

  
    {/* Render Subscription Popup */}
    {showPopup && (
      <SubscriptionPopup
        onClose={() => setShowPopup(false)}
        onVerify={handleVerify}
      />
    )}
  
    <footer className="text-black py-6 mt-auto">
      <div className="flex flex-col justify-center items-center space-y-2">
        <p className="text-sm md:text-base text-center font-bold">
          Crafted with ❤️ by <span className="font-extrabold text-green-400">Team Syntax Squad</span>
        </p>
        <p className="text-center font-bold text-gray-700">
          Ham hi wo jinki wajah se Designers ki job jaegi! (Bas, mazaak kar rahe hain 😜)
        </p>
      </div>
    </footer>
  </div>
  
  
  );
}

export default Viewcode;
