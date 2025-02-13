import React, { useEffect, useRef } from "react";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "sonner";

const AuthNotifier = () => {
  const { isSignedIn } = useAuth();
  const prevSignedInState = useRef(null);

  useEffect(() => {
    if (prevSignedInState.current === null) {
      // Initial mount: store the current state but don't show a toast
      prevSignedInState.current = isSignedIn;
      return;
    }

    if (isSignedIn && !prevSignedInState.current) {
      // 🎉 User just signed in
      toast.success("Welcome back to Pixora! 🚀", {
        description: "Enjoy seamless UI-to-code transformation.",
        duration: 3000,
        position: "top-right",
        className: "text-white bg-green-500 shadow-lg",
      });
    } else if (!isSignedIn && prevSignedInState.current) {
      // 👋 User just signed out
      toast.info("You have signed out!", {
        description: "Come back soon for more AI magic!",
        duration: 3000,
        position: "top-right",
        className: "text-white bg-red-500 shadow-lg",
      });
    }

    // Update previous state
    prevSignedInState.current = isSignedIn;
  }, [isSignedIn]);

  return null; // No UI, only listens for auth changes
};

export default AuthNotifier;
