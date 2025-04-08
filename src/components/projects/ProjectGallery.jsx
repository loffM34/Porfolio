import { useContext } from "react";
import AllProjectsContext from "../../context/AllProjectsContext";

const ProjectGallery = ({ projectId }) => {
  const { allProjectsData } = useContext(AllProjectsContext);
  const project = allProjectsData[projectId];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {project.ProjectImages.map((project) => {
        return (
          <div className="mb-10 sm:mb-0" key={project.id}>
            <img
              src={project.img}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
              alt={project.title}
              key={project.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectGallery;
