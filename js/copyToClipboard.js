export function copyToClipboard(text) {
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
