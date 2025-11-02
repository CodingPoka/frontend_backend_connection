import axios from "axios";
import React from "react";
import { useEffect } from "react";

const Profile = ({ student }) => {
  // Example student data if not passed via props

  useEffect(()=>{
    const response=  await axios.get("/api/profile");
    const data=response.data;
  })
  const user = student || {
    name: "John Doe",
    email: "john@example.com",
    age: 22,
    university: "MIT",
    phone: "+1234567890",
    profilePic: "https://via.placeholder.com/150", // placeholder image
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          {user.name}
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between text-gray-700">
            <span className="font-semibold">Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-semibold">Age:</span>
            <span>{user.age}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-semibold">University:</span>
            <span>{user.university}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-semibold">Phone:</span>
            <span>{user.phone}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
