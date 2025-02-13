import React, { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!isSignedIn) {
      toast.error("Access Denied!", {
        description: "You need to sign in or sign up to access this page.",
        duration: 3000,
      });
    }
  }, [isSignedIn]);

  if (!isSignedIn) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
