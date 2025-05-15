export function initThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");

    // Check cookie setting
    const savedTheme = localStorage.getItem("theme");

    // Apply saved theme if exists
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    // Add click event to toggle theme
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");

        // Save current theme preference
        const currentTheme = document.body.classList.contains("light-theme")
            ? "light"
            : "dark";
        localStorage.setItem("theme", currentTheme);
    });
}