// ===============================
// CHANGE THEME FROM LIGHT TO DARK
// ===============================

// Select the button specifically labeled to change the webpage theme
const themeButton = document.getElementById("theme-toggle");

// Listen for a click on the theme button
themeButton.addEventListener("click", function () {
  // Toggle the dark-mode class on the body
  document.body.classList.toggle("dark-mode");

  // Update the button label to match the next available theme change
  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "Switch to Light Mode";
  } else {
    themeButton.textContent = "Switch to Dark Mode";
  }
});