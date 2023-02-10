import Header from "@/component/header";
import { projectsFake } from "../data";
import { useEffect, useState } from "@/lib";

const ProjectDetailPage = (id) => {
    // const currentProject = projectsFake.find((project) => project.id == id);
    // if (!currentProject) return "";
    const [project, setProject] = useState({});
    useEffect(() => {
        fetch("http://localhost:5170/projects/" + id)
            .then((response) => response.json())
            .then((data) => setProject(data));
    }, []);
    return `
    ${Header()}
    <h1>${currentProject.name}</h1>
    <h1>${project.name}</h1>
    `;

};
export default ProjectDetailPage;