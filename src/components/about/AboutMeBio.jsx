import profileImage from "../../images/profile.jpg";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import NoteBoard from "./NoteBoard";
import ProfileCard from "./ProfileCard";
const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div
      className="justify-center block sm:flex sm:gap-10 mt-10 sm:mt-20 overflow-visible"
      id="aboutMeSection"
      style={{ marginTop: "250px", marginBottom: "250px" }}
    >
      <ProfileCard></ProfileCard>
    
    </div>
  );
};

export default AboutMeBio;
