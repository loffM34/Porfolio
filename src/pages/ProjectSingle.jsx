import { useLocation } from "react-router-dom";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
// import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects";
import { AllProjectsProvider } from "../context/AllProjectsContext";
import { motion } from "framer-motion";

const ProjectSingle = () => {
  const location = useLocation();
  const projectId = location.state?.projectId;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <AllProjectsProvider>
        <ProjectHeader projectId={projectId} />
        <ProjectGallery projectId={projectId} />
        <ProjectInfo projectId={projectId} />
        {/* <ProjectRelatedProjects /> */}
      </AllProjectsProvider>
    </motion.div>
  );
};

export default ProjectSingle;
