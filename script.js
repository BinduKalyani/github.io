function loadMarkdown(file, elementId) {
  fetch(file)
    .then(response => response.text())
    .then(text => {
      document.getElementById(elementId).innerHTML = marked.parse(text);
    });
}

loadMarkdown("about.md", "about");
loadMarkdown("interests.md", "interests");
loadMarkdown("experience.md", "experience");

fetch('data/projects.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('project-list');

    data.projects.forEach(p => {
      const div = document.createElement('div');
      div.className = "project-item";

      div.innerHTML = `
        <strong>${p.title}</strong><br>
        <a href="${p.link}" target="_blank">View</a>
      `;

      container.appendChild(div);
    });
  });

