document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { title: "Project A", description: "Description for Project A" },
        { title: "Project B", description: "Description for Project B" },
    ];

    const projectContainer = document.getElementById("project-list");

    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectContainer.appendChild(projectElement);
    });
});
