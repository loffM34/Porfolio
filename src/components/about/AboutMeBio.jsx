import profileImage from "../../images/profile.jpg";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import NoteBoard from "./NoteBoard";
import AboutMe from "./testAboutComponent";
const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div
      className="block sm:flex sm:gap-10 mt-10 sm:mt-20 overflow-visible"
      id="aboutMeSection"
      style={{ marginTop: "250px", marginBottom: "250px" }}
    >
      <AboutMe />
    </div>
  );
};

export default AboutMeBio;
