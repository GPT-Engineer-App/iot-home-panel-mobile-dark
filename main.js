// Toggle dark theme
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// Toggle device state
const buttons = document.querySelectorAll("main button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "ON") {
      button.textContent = "OFF";
      button.classList.remove("bg-blue-500");
      button.classList.add("bg-gray-500");
    } else if (button.textContent === "OFF") {
      button.textContent = "ON";
      button.classList.remove("bg-gray-500");
      button.classList.add("bg-blue-500");
    } else if (button.textContent === "LOCK") {
      button.textContent = "UNLOCK";
      button.classList.remove("bg-blue-500");
      button.classList.add("bg-gray-500");
    } else if (button.textContent === "UNLOCK") {
      button.textContent = "LOCK";
      button.classList.remove("bg-gray-500");
      button.classList.add("bg-blue-500");
    }
  });
});
