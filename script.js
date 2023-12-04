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



function toggleContent(contentId) {
  var content = document.getElementById(contentId);
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
