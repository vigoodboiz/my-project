import { projectsFake } from "../../data/index";
import { useState } from "../../lib/index";
import { useEffect } from "../../lib/index";
const adminProjectsPage = () => {
    const [data, setData] = useState(projectsFake);
    useEffect(() => {
        const projects = JSON.parse(localStorage.getItem("projectsFake")) || [];
        setData(projects);
    }, []);
    useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove');
        for (let btn of btns) {
            btn.addEventListener('click', function () {
                const id = this.dataset.id;
                removeItem(id);
            })
        }
    });
    const removeItem = (id) => {
        setData(data.filter((project) => project.id != id));
    };
    return ` <div>
    <h1>Quản lí dự án</h1>
    <table>
      <thead>
         <tr>
            <th>Id</th>
            <th>Tên dự án</th>
            <th>Action</th>
         </tr>
      </thead>
      <tbody>
    ${data.map((project, index) => `
         <tr>
            <td>${index + 1}</td>
            <td>${project.name}</td>
            <td>
                <button data-id="${project.id}" class="btn btn-remove btn-danger">Remove</button>
            </td>
         </tr>
    `).join("")}
    </tbody>
    </table>
    </div>`
};

export default adminProjectsPage;