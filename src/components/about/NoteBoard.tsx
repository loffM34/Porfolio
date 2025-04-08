import React, { useState } from "react";
import PostIt from "./PostIt";
import pinBoard from "../../images/pinBoard.png";
import corkBoard from "../../images/cork-board.jpg";
import profileImage from "../../images/profile.jpg";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";

interface Bio {
  id: number;
  bio: string;
}

interface Note {
  id: number;
  x: number;
  y: number;
  content: React.ReactNode;
}

const NoteBoard: React.FC = () => {
  const { aboutMe } = useContext(AboutMeContext) as { aboutMe: Bio[] };
  const [focusedNoteId, setFocusedNoteId] = useState<number | null>(null);

  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      x: 400,
      y: 200,
      content: (
        <div>
          {aboutMe.map((bio) => (
            <p key={bio.id} className="text-lg mb-2">
              {bio.bio}
            </p>
          ))}
        </div>
      ),
    },
    {
      id: 2,
      x: 250,
      y: 250,
      content: (
        <div>
          <img src={profileImage} alt="Profile" className="rounded-lg w-32" />
        </div>
      ),
    },
    {
      id: 3,
      x: 250,
      y: 250,
      content: (
        <div className="bg-transparent">
          <img src={profileImage} alt="Profile" className="rounded-lg w-32" />
        </div>
      ),
    },
    {
      id: 4,
      x: 250,
      y: 250,
      content: (
        <div>
          <img src={profileImage} alt="Profile" className="rounded-lg w-32" />
        </div>
      ),
    },
  ]);

  const updateNotePosition = (id: number, x: number, y: number) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, x, y } : note))
    );
  };

  return (
    <div
      onClick={() => setFocusedNoteId(null)} // 👈 This clears the focus
      style={{
        position: "relative",
        height: "1000px",
        maxHeight: "1000px",
        border: "2px dashed #ccc",
        margin: "2rem auto",
        width: "100%",
        maxWidth: "1500px",
        background: "#0d2438",
        backgroundImage: `url(${corkBoard})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {notes.map((note) => (
        <PostIt
          key={note.id}
          id={note.id}
          x={note.x}
          y={note.y}
          onDrag={updateNotePosition}
          onDoubleClick={() => setFocusedNoteId(note.id)} // ✅ function
          isFocused={focusedNoteId === note.id} // ✅ bool
        >
          {note.content}
        </PostIt>
      ))}
    </div>
  );
};

export default NoteBoard;
