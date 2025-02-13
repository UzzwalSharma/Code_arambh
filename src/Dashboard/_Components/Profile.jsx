import React from "react";
import { useUser } from "@clerk/clerk-react";

function Profile() {
  const { user } = useUser();

  if (!user) {
    return <p className="text-center text-gray-400">Loading user data...</p>;
  }

  const profileImageUrl =
    user.profileImageUrl || user.externalAccounts[0]?.imageUrl || "/default-profile.png";

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-3/4 max-w-5xl grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-2xl overflow-hidden bg-gray-900">
        {/* Profile Image Section */}
        <div className="flex items-center justify-center p-6">
          <img
            src={profileImageUrl}
            alt={user.firstName || "User"}
            className="w-48 h-48 rounded-full object-cover border-4 border-green-400"
          />
        </div>

        {/* Profile Details Section */}
        <div className="p-6 flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold text-green-400">{user.firstName} {user.lastName}</h2>
          <p className="text-gray-400">{user.email}</p>
          <p className="text-gray-400">{user.username || "No username set"}</p>

          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-300 font-medium">Account Created:</p>
            <p className="text-gray-500">{new Date(user.createdAt).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-300 font-medium">Last Updated:</p>
            <p className="text-gray-500">{new Date(user.updatedAt).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
