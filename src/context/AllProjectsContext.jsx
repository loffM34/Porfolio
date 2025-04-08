import { useState, createContext } from "react";
import { allProjectsData as allProjectsDataJson } from "../data/allProjectData";

const AllProjectsContext = createContext();

export const AllProjectsProvider = ({ children }) => {
  const [allProjectsData, setallProjectsData] = useState(allProjectsDataJson);
  return (
    <AllProjectsContext.Provider
      value={{ allProjectsData, setallProjectsData }}
    >
      {children}
    </AllProjectsContext.Provider>
  );
};

export default AllProjectsContext;
