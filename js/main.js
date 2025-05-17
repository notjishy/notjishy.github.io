import { copyToClipboard } from "./copyToClipboard.js";
import { initThemeToggle } from "./themeToggle.js";
import { animateName } from "./nameAnimator.js";

window.addEventListener("DOMContentLoaded", () => {
	animateName();
	initThemeToggle();
});

window.copyToClipboard = copyToClipboard;
