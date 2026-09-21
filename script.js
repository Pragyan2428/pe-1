const eye = document.getElementById('eye');
const pupil = document.getElementById('pupil');

// how far from center the pupil is allowed to travel (in px)
const maxOffset = (eye.offsetWidth / 2) - (pupil.offsetWidth / 2) - 10;

document.addEventListener('mousemove', (e) => {
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    // angle from eye center to cursor
    const dx = e.clientX - eyeCenterX;
    const dy = e.clientY - eyeCenterY;
    const angle = Math.atan2(dy, dx);

    // distance, clamped so the pupil never leaves the eye
    const distance = Math.min(Math.hypot(dx, dy), maxOffset);

    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;

    pupil.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
});