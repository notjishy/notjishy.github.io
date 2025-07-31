function createLightningPath(width, height) {
    let path = `M ${width} 0`; // starts at top of window
    let currentY = 0;

    // generate from 3-5 segments
    const segments = Math.floor(Math.random() * 3) + 3;
    const segmentHeight = height / segments;

    for (let i = 0; i < segments; i++) {
        const nextY = currentY + segmentHeight;
        const randomX = width + (Math.random() * 100 - 50); // zigzag +-50px
        path += ` L ${randomX} ${nextY}`;
        currentY = nextY;
    }

    return path;
}

function createLightningElements() {
    const flash = document.createElement('div');
    flash.className = 'lightning-flash';

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add('lightning-bolt');
    svg.setAttribute('width', '100');
    svg.setAttribute('height', '100%');
    svg.style.position = 'fixed';

    const bolt = document.createElementNS("http://www.w3.org/2000/svg", "path");
    bolt.setAttribute('stroke', '#ffffff');
    bolt.setAttribute('stroke-width', '2');
    bolt.setAttribute('fill', 'none');

    svg.appendChild(bolt);
    document.body.appendChild(flash);
    document.body.appendChild(svg);

    return { flash, svg, bolt };
}

function triggerLightning(elements) {
    // do not run if in light mode
    if (document.body.classList.contains('light-theme')) return;

    const { flash, svg, bolt } = elements;

    const randomX = Math.random() * (window.innerWidth - 100);
    svg.style.left = `${randomX}px`;

    const path = createLightningPath(50, window.innerHeight);
    bolt.setAttribute('d', path);

    flash.style.animation = 'flash 1.5s ease-out';
    svg.style.animation = 'lightningStrike 1.5s ease-out';

    setTimeout(() => {
        flash.style.animation = 'none';
        svg.style.animation = 'none';
    }, 1500);
}

export function initLightningEffect() {
    const elements = createLightningElements();

    // play randomly between 3 and 13 seconds
    setInterval(() => {
        const randomDelay = Math.floor(Math.random() * 3000) + 3000;
        setTimeout(() => triggerLightning(elements), randomDelay);
    }, 13000);
}