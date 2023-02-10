
import projectItem from "./projectItem";

const projectsList = ({ projects }) => {
    return `${projects.map((project) => `${projectItem({ project })}`).join("")}`;
    console.log(projects);
};
export default projectsList;