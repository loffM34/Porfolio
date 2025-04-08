import { useState } from "react";
import { motion } from "framer-motion";
import tempImg from "../../images/surfingDeveloper.png";

export default function AboutMe() {
  const [hovered, setHovered] = useState(false);

  const floatingImages = [
    { src: "tempImg", className: "absolute top-10 left-[100%] max-w-[50px]" },
    { src: "tempImg", className: "fixed bottom-0 right-0  max-w-[50px]" },
    { src: "tempImg", className: "fixed bottom-[10%] right-0  max-w-[50px]" },
    { src: "tempImg", className: "absolute bottom-[10%] right-0  max-w-[50px]" },
  ];

  return (
    <div className="relative w-full flex justify-center items-center min-h-[600px] bg-gray-100">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative bg-white shadow-xl rounded-xl p-10 max-w-md w-full"
      >
        {/* Floating Images */}
        {hovered &&
          floatingImages.map((img, index) => (
            <motion.img
              key={index}
              src={img.src}
              alt="floating-icon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`absolute w-10 h-10 rounded-full shadow-md ${img.className}`}
            />
          ))}

        {/* Profile content */}
        <img
          src="https://via.placeholder.com/128?text=Me"
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-300 object-cover"
        />
        <p className="mt-6 text-center text-gray-700">
          Hey! I'm a Computer Science student passionate about AI, software
          development, and surfing. I love building creative tech — you'll
          usually find me coding or catching waves!
        </p>
      </div>
    </div>
  );
}
