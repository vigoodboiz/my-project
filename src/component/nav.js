import { menus } from "../data";

const nav = () => {
    return `
    <nav>
    ${menus.map(menu => `<a href="${menu.link}">${menu.name}</a>`).join('')}
            ${menus.map((menu) => `<a href="${menu.link}">${menu.name}</a>`).join("")}
 </nav>
    `;
};
export default nav;