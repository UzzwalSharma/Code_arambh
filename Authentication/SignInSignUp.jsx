import React, { useEffect } from "react";
import { SignIn, SignUp, useAuth } from "@clerk/clerk-react";
import { Toaster, toast } from "sonner";

const SignInSignUp = ({ isSignUp = false }) => {
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      toast.success("Successfully signed in!", {
        description: "Welcome back to Pixora 🚀",
        duration: 3000,
      });
    }
  }, [isSignedIn]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Toast Notifications */}
      <Toaster position="top-right" richColors />

      {/* Left Side with Image */}
      <div
        className="hidden sm:block w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/view-3d-woman-using-laptop.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Right Side with Sign In/Sign Up Form */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-6 sm:py-0">
        <div className="w-full max-w-md p-8 space-y-6">
        <div className="text-center mb-6">
  <h2 className="text-4xl font-black text-black drop-shadow-[0_0_15px_#32CD32]">
    Welcome to{" "}
    <span className="text-[#46dd4e] drop-shadow-[0_0_20px_#f4c858]">
      Pixora
    </span>
  </h2>
  <p className="text-gray-400 mt-2 drop-shadow-[0_0_10px_#0ff]">
    Please {isSignUp ? "sign up" : "sign in"} to continue
  </p>
</div>

          <div className="rounded-lg p-6 space-y-4 transform transition-all duration-500 ease-in-out hover:scale-105">
            {isSignUp ? <SignUp /> : <SignIn />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
