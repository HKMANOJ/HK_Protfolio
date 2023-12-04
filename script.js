document.addEventListener('DOMContentLoaded', () => {
  // Fetch projects from projects.json and display them
  fetchProjects();

  const toggleButton = document.getElementById('toggleMode');
  const body = document.body;

  // Check if the user has a preference stored
  const userPreference = localStorage.getItem('theme');
  if (userPreference === 'dark') {
    body.classList.add('dark-mode');
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save the user's preference
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Update h2 elements based on dark mode
    updateH2Elements(isDarkMode);
  });

  // Function to update h2 elements based on dark mode
  function updateH2Elements(isDarkMode) {
    const h2Elements = document.querySelectorAll('h2');

    h2Elements.forEach((h2) => {
      if (isDarkMode) {
        h2.classList.add('dark-mode-heading');
      } else {
        h2.classList.remove('dark-mode-heading');
      }
    });
  }
});

async function fetchProjects() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/HKMANOJ/HK_Protfolio/main/projects.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const projects = await response.json();
    console.log('Fetched projects:', projects);
    displayProjects(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
}


function displayProjects(projects) {
  const projectsList = document.getElementById('project-content');
  projects.forEach(project => {
    const projectElement = createProjectElement(project);
    projectsList.appendChild(projectElement);
  });
}

function createProjectElement(project) {
  const projectElement = document.createElement('div');
  projectElement.classList.add('project');

  // Conditionally set the background color for the GitHub link
  const githubLinkStyle = document.body.classList.contains('dark-mode') ? 'background-color: transparent;' : 'background-color: white; padding: 10px; border-radius: 5px;';

  projectElement.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.github}" target="_blank" style="${githubLinkStyle}">GitHub Repo</a>
  `;
  return projectElement;
}

function toggleContent(contentId) {
  var content = document.getElementById(contentId);
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
