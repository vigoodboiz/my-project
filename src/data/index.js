const projectsFake = [
    {
        id: 1,
        name: "Dự án 1",
        teams: [
            {
                id: 1,
                name: "Vĩ",
            },
            {
                id: 2,
                name: "Đạt"
            },
            {
                id: 3,
                name: "Đức"
            }
        ]
    },
    {
        id: 2,
        name: "Dự án mẫu"
    },
    {
        id: 3,
        name: "Dự án tốt nghiệp",
        teams: [
            {
                id: 1,
                name: "Vĩ",
            },
            {
                id: 2,
                name: "Đạt"
            },
            {
                id: 3,
                name: "Đức"
            }
        ]
    }
]

const menus = [
    { id: 1, name: "Trang chủ", link: "/" },
    { id: 2, name: "Dự án", link: "/projects" },
    { id: 3, name: "Liên hệ", link: "/contact" },
    { id: 4, name: "Bài viết", link: "/posts" },
]
export { projectsFake, menus };