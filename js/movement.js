// Circle

const circle = document.querySelector('.circle');
const skillsContainer = document.querySelector('#skillsFull');

let targetX = 0;
let targetY = 0;
let isFollowingMouse = false;

function generateRandomPosition() {
    const containerRect = skillsContainer.getBoundingClientRect();

    const maxX = containerRect.width - circle.offsetWidth;
    const maxY = containerRect.height - circle.offsetHeight;

    targetX = Math.random() * maxX;
    targetY = Math.random() * maxY;
}

function animateCircle() {
    if (!isFollowingMouse) {
        const currentTransform = circle.style.transform.match(/translate\((.*)px, (.*)px\)/);
        const currentX = currentTransform ? parseFloat(currentTransform[1]) : 0;
        const currentY = currentTransform ? parseFloat(currentTransform[2]) : 0;

        const stepX = (targetX - currentX) * 0.08;
        const stepY = (targetY - currentY) * 0.08;

        const nextX = currentX + stepX;
        const nextY = currentY + stepY;

        circle.style.transform = `translate(${nextX}px, ${nextY}px)`;

        if (Math.abs(targetX - nextX) < 1 && Math.abs(targetY - nextY) < 1) {
            generateRandomPosition();
        }
    }

    requestAnimationFrame(animateCircle);
}

function followMouse(event) {
    const containerRect = skillsContainer.getBoundingClientRect();
    const x = event.clientX - containerRect.left - circle.offsetWidth / 2;
    const y = event.clientY - containerRect.top - circle.offsetHeight / 2;

    const constrainedX = Math.max(0, Math.min(x, containerRect.width - circle.offsetWidth));
    const constrainedY = Math.max(0, Math.min(y, containerRect.height - circle.offsetHeight));

    circle.style.transform = `translate(${constrainedX}px, ${constrainedY}px)`;
}

skillsContainer.addEventListener('mouseenter', () => isFollowingMouse = true);
skillsContainer.addEventListener('mouseleave', () => {
    isFollowingMouse = false;
    generateRandomPosition();
});
skillsContainer.addEventListener('mousemove', (event) => {
    if (isFollowingMouse) followMouse(event);
});

generateRandomPosition();
animateCircle();
