import React, { useState } from "react";

interface PostItProps {
  id: number;
  x: number;
  y: number;
  text?: string;
  children?: React.ReactNode;
  onDrag: (id: number, x: number, y: number) => void;
  onDoubleClick?: React.MouseEventHandler<HTMLDivElement>; // ✅ correct typing
  isFocused?: boolean; // ✅ fixes the "Cannot find name 'isFocused'" error
}
const PostIt: React.FC<PostItProps> = ({
  id,
  x,
  y,
  text,
  children,
  onDrag,
  onDoubleClick,
  isFocused,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const handleMouseDown = (e: React.MouseEvent) => {
    if (x === undefined || y === undefined) return;
    setIsDragging(true);
    setOffset({
      x: e.clientX - x,
      y: e.clientY - y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (
      !isDragging ||
      id === undefined ||
      x === undefined ||
      y === undefined ||
      !onDrag
    )
      return;
    onDrag(id, e.clientX - offset.x, e.clientY - offset.y);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  return (
    <div
      onMouseDown={(e) => {
        e.preventDefault();
        handleMouseDown(e);
      }}
      onDoubleClick={onDoubleClick} // ✅ now correctly typed
      style={{
        position: "absolute",
        left: x,
        top: y,
        padding: "10px",
        background: "#fff78a",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
        cursor: "grab",
        borderRadius: "8px",
        maxWidth: "500px",
        userSelect: "none",
        zIndex: isFocused ? 999 : 1,
        transform: isFocused ? "scale(1.3)" : "scale(1)",
        transition: "transform 0.2s ease, z-index 0.2s",
      }}
    >
      {children ?? <div>{text}</div>}
    </div>
  );
};

export default PostIt;
