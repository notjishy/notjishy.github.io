function copyToClipboard(text) {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			// Show notification
			const notification = document.getElementById("copy-notification");
			notification.classList.add("show");

			// Hide notification after 2 seconds
			setTimeout(() => {
				notification.classList.remove("show");
			}, 2000);
		})
		.catch((err) => {
			console.error("Could not copy text: ", err);
		});
}

// Animation for name changing with obfuscation
const names = ["jishy", "jishe"];
const chars = "abcdefghijklmnopqrstuvwxyz";
let nameIndex = 0;
let isAnimating = false;
let currentText = names[nameIndex];

function getRandomChar() {
	return chars.charAt(Math.floor(Math.random() * chars.length));
}

function animateName() {
	const nameElement = document.querySelector(".name");
	if (!nameElement) return;

	// Initial setup
	nameElement.textContent = names[0];

	setInterval(() => {
		if (!isAnimating) {
			isAnimating = true;

			// Start obfuscation phase
			let currentObfuscatedText = names[nameIndex].split("");
			let obfuscationProgress = 0;
			let obfuscationInterval = setInterval(() => {
				// Gradually replace more characters with random ones
				for (let i = 0; i < currentObfuscatedText.length; i++) {
					if (Math.random() < obfuscationProgress) {
						currentObfuscatedText[i] = getRandomChar();
					}
				}

				nameElement.textContent = currentObfuscatedText.join("");

				// Progression for obfuscation
				obfuscationProgress += 0.03;

				if (obfuscationProgress >= 1) {
					clearInterval(obfuscationInterval);

					// Switch to next name for the reveal phase
					nameIndex = (nameIndex + 1) % names.length;
					const nextName = names[nameIndex];

					// Start revealing one letter at a time but faster
					let revealedCharCount = 0;

					function revealNextChar() {
						if (revealedCharCount >= nextName.length) {
							// All characters revealed
							isAnimating = false;
							return;
						}

						// Create a new obfuscated text, but with revealed characters fixed
						let result = [];

						for (let i = 0; i < nextName.length; i++) {
							if (i <= revealedCharCount) {
								// This character is now fixed/revealed
								result.push(nextName[i]);
							} else {
								// This character is still randomized
								result.push(getRandomChar());
							}
						}

						nameElement.textContent = result.join("");

						// Increment the counter for the next character to reveal
						revealedCharCount++;

						// Schedule next character reveal with shorter delay (250ms)
						if (revealedCharCount < nextName.length) {
							setTimeout(revealNextChar, 250);
						} else {
							isAnimating = false;
						}
					}

					// Start the sequential reveal process with shorter initial delay
					setTimeout(revealNextChar, 200);
				}
			}, 70); // Interval for obfuscation phase
		}
	}, 7000); // Change names every 7 seconds
}

window.addEventListener("DOMContentLoaded", () => {
	animateName();
});
