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
loadMarkdown("projects.md", "projects");
