import React from "react";
import profilePic from "../../images/profile.jpg";

const ProfileCard: React.FC = () => {
  return (
    <div className="max-w-sm p-6 bg rounded-2xl shadow-xl text-center bg-primary-light dark:bg-ternary-dark shadow-sm dark:text-ternary-light">
      {/* Smaller Profile Image */}

      <img
        src={profilePic}
        alt="Profile"
        className="max-w-xl h-36 mx-auto rounded-full object-cover border-4 border-indigo-500"
      />

      {/* About Text */}
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Michael Loff
      </h2>
      <p className="mt-2 text-xl text-gray-600">
        I'm a software developer passionate about creating clean, user-focused
        web experiences. I love React, TypeScript, and building cool side
        projects.
      </p>
    </div>
  );
};

export default ProfileCard;
