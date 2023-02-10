import Header from "../component/header";
import projectsList from "../component/projectList";
import { projectsFake } from "../data";
import { useEffect, useState } from "@/lib";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5170/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);
    return `
    ${Header()}
    <h1>Projects Page</h1>
    ${projectsList({ projects: projectsFake })}`
};
export default ProjectsPage;