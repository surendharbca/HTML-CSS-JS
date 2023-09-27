// JavaScript function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateRandomColor() {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
    document.getElementById('color-display').textContent = `Random Color: ${color}`;
}