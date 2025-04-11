import { useContext } from "react";
import AllProjectsContext from "../../context/AllProjectsContext";
import { useState } from "react";

const ProjectGallery = ({ projectId }) => {
  const { allProjectsData } = useContext(AllProjectsContext);
  const project = allProjectsData[projectId];
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className="grid grid-cols-1 w-full sm:grid-cols-3 sm:gap-10 mt-12 justify-center">
      {project.ProjectImages.map((project) => {
        return (
          <div className="mb-0 sm:mb-0" key={project.id}>
            <img
              src={project.img}
              className="rounded-xl w-96 h-96 cursor-pointer shadow-lg sm:shadow-none"
              alt={project.title}
              key={project.id}
              style={{ width: "300px", height: "300px", cursor: "pointer" }}
              onClick={() => setModalImage(project.img)}
            />
          </div>
        );
      })}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
        >
          <img
            src={modalImage}
            alt="Zoomed"
            className="max-w-xl max-h-xl rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
