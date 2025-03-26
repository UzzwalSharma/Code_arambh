import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./_Components/Header";
import UserSection from "./_Components/UserSection";
import CodeEditor from "./_Components/CodeEditor";
import SubscriptionPopup from "./_Components/SubscriptionPopup";
import Rating from "./_Components/Rating.jsx"
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
 
        <div className="flex flex-col min-h-screen bg-gray-100">
          {/* Header */}
          <Header />
    
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 p-6 flex-grow">
            {/* Sidebar Section */}
            <aside className="md:col-span-1 space-y-6">
              {/* User Info Section */}
              <UserSection />
    
              {/* Rating Section */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-center">Rate Your Experience</h3>
                <Rating />
              </div>
    
              {/* GitHub User Info */}
              {user ? (
                <div className="text-center bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="font-bold text-lg">Welcome, {user.login}!</h3>
                  <h4 className="text-gray-600">This is your Pixora Panel</h4>
                  <img
                    src={user.avatar_url}
                    alt="User Avatar"
                    className="rounded-full w-20 h-20 mx-auto mt-3 border-4 border-gray-300 transition-transform hover:scale-105"
                  />
                </div>
              ) : (
                <button
                  onClick={handleGitHubConnect}
                  className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-lg transition transform hover:scale-105"
                >
                  Connect to GitHub
                </button>
              )}
            </aside>
    
            {/* Main Content Section */}
            <main className="md:col-span-4 bg-white p-6 rounded-lg shadow-lg">
              <CodeEditor code={code} />
            </main>
          </div>
    
          {/* User Panel & GitHub Info */}
          <section className="w-[80vw] bg-white rounded-lg p-6 flex flex-col md:flex-row justify-between items-center mx-auto mt-6 border-2 border-green-400 shadow-lg">
            <button
              onClick={() => setShowPopup(true)}
              className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg transition transform hover:scale-105"
            >
              Start Expert Call
            </button>
    
            {user ? (
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
            ) : (
              <p className="text-gray-600">Please connect your GitHub account to see user details.</p>
            )}
          </section>
    
          {/* Subscription Popup */}
          {showPopup && <SubscriptionPopup onClose={() => setShowPopup(false)} onVerify={handleVerify} />}
    
          {/* Footer */}
          <footer className="text-black py-6 mt-auto">
            <div className="text-center">
              <p className="text-sm md:text-base font-bold">
                Crafted with ❤️ by <span className="text-green-400">Team Syntax Squad</span>
              </p>
              <p className="font-bold text-gray-700">
                Ham hi wo jinki wajah se Designers ki job jaegi! (Bas, mazaak kar rahe hain 😜)
              </p>
            </div>
          </footer>
        </div>
      );
    }
    
  
  
 

export default Viewcode;