import React from "react";
import profilePic from "../../images/profile.jpg";
import surfPhoto from "../../images/surfPhoto.jpg";
import soccerPhoto from "../../images/soccerPhoto.jpg";
import hackNJIT from "../../images/hackNJIT.jpg";
import hackRU from "../../images/hackRU.jpg";
import ProfileImageScroller from "./ProfileImageScroller";

const images = [surfPhoto, soccerPhoto, hackNJIT, hackRU, profilePic];

const ProfileCard: React.FC = () => {
  return (
    <div className="max-w-xl p-6 bg rounded-3xl shadow-xl text-center bg-primary-light dark:bg-ternary-dark shadow-sm dark:text-ternary-light">
      <h1 className="mb-5 text-4xl font-semibold text-gray-800">About Me</h1>
      {/* Smaller Profile Image */}

      <div className="w-96 h-96 rounded-full overflow-hidden border-indigo-500 shadow-md mx-auto">
        <img src={profilePic} alt="Profile" className="rounded-full" />
      </div>

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
