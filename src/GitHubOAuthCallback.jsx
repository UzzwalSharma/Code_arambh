import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function GitHubOAuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGitHubToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      if (!code) {
        console.error("❌ GitHub OAuth code not found.");
        setTimeout(() => navigate("/"), 3000);
        return;
      }

      try {
        console.log("🔄 Fetching GitHub token with code:", code);
        const response = await axios.post("https://pixora-s-backend.onrender.com/github-oauth", { code });

        const { access_token } = response.data;

        if (access_token) {
          localStorage.setItem("github_token", access_token);
          console.log("✅ GitHub Token Stored:", access_token);

          // ✅ Redirect to Homepage
          setTimeout(() => navigate("/"), 3000);
        }
      } catch (error) {
        console.error("❌ Error fetching GitHub access token:", error);
        setTimeout(() => navigate("/"), 3000);
      }
    };

    fetchGitHubToken();
  }, [navigate]);

  return (
    <div className="text-center mt-10 text-lg font-bold">
      ⏳ Processing GitHub Authentication... Please wait.
    </div>
  );
}

export default GitHubOAuthCallback;
