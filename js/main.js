import { copyToClipboard } from "./copyToClipboard.js";
import { initThemeToggle } from "./themeToggle.js";
import { animateName } from "./nameAnimator.js";
import { initLightningEffect } from "./lightningEffect.js";

window.addEventListener("DOMContentLoaded", () => {
	animateName();
	initThemeToggle();
	initLightningEffect();
});

window.copyToClipboard = copyToClipboard;
