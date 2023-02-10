import { router, useEffect } from '../../lib/index';
import { projectsFake } from '../../data/index';

const projectsAdd = () => {
    const projects = JSON.parse(localStorage.getItem("projectsFake")) || [];
    useEffect(() => {
        const form = document.querySelector('#form-add');
        const name = document.querySelector('#name');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            projectsFake.push({
                id: projectsFake.length + 1,
                name: name.value,
            })
            localStorage.setItem("projects", JSON.stringify(projects));
            router.navigate("/admin/projects");
        })
    })
    return `<div>
    <form id="form-add">
        <input type="text" id="name" class="border" />
        <button class="btn btn-primary">Thêm</button>
    </form>
</div>`
}

export default projectsAdd;