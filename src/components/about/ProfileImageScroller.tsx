import React from "react";
import profilePic from "../../images/profile.jpg";
import surfPhoto from "../../images/surfPhoto.jpg";
import soccerPhoto from "../../images/soccerPhoto.jpg";
import hackNJIT from "../../images/hackNJIT.jpg";
import hackRU from "../../images/hackRU.jpg";


const images = [surfPhoto, soccerPhoto, hackNJIT, hackRU, profilePic];

const ProfileImageScroller: React.FC = () => {
  return (
    <div
      className="relative overflow-hidden mt-12 mx-auto w-[1200px] h-[400px]"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
      }}
    >
      <div
        className="flex gap-4"
        style={{
          animation: "marquee 40s linear infinite",
          width: "fit-content",
          display: "flex",
        }}
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="w-[400px] h-[400px] shrink-0">
            <img
              src={src}
              alt={`scroll-img-${i}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default ProfileImageScroller;
