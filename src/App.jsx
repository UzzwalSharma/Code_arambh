import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Landing page/Landingpage";
import Dashboard from "/src/Dashboard/Layout.jsx";
import Workspace from "./Dashboard/_Components/Workspace";
import Designs from "./Dashboard/_Components/Designs";
import Viewcode from "./Mainpage/Viewcode";
import PixoraPlus from "./Dashboard/_Components/PixoraPlus";
import About from "./Dashboard/_Components/About";
import SignInSignUp from "/Authentication/SignInSignUp.jsx";
import ProtectedRoute from "/Authentication/ProtectedRoute.jsx";
import { Toaster } from "sonner";
import AuthNotifier from "/Authentication/AuthNotifier.jsx";
import Profile from "/src/Dashboard/_Components/Profile.jsx"
import Pricing from "/src/Landing page/Pricing.jsx"
import GetInTouch from "./GetInTouch";
import GitHubOAuthCallback from "./GitHubOAuthCallback";
function App() {
  return (
    <Router>
       <Toaster position="top-right" richColors />
       <AuthNotifier />
      <Routes>
        <Route path="/signin" element={<SignInSignUp />} />
        <Route path="/signup" element={<SignInSignUp isSignUp />} />
        <Route path="/" element={<Landingpage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/*  index route to show home by default */}
          <Route index element={<Workspace />} />
          <Route path="dashboard" element={<Workspace />} />
          <Route path="designs" element={<Designs />} />
          <Route path="subscription" element={<PixoraPlus />} />
          <Route path="about" element={<About />} />
          <Route path="Profile" element={<Profile />} />
         
        </Route>
        {/* <Route path="/generated-code/:id" element={<Generatedcode />} /> */}
        <Route
          path="/generated-code/:id"
          element={
            <ProtectedRoute>
              <Viewcode />
            </ProtectedRoute>
          }
        />
         <Route path="contact" element={<GetInTouch />} />
         <Route path="pricing" element={<Pricing />} />
         <Route path="/github-oauth-callback" element={<GitHubOAuthCallback />} />

      </Routes>
    </Router>
  );
}

export default App;