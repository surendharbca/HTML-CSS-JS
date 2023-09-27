// JavaScript function to change the background color
function changeBackgroundColor() {
    const colors = ["#ff5733", "#33ff57", "#5733ff", "#ff33e6", "#33e6ff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Add an onclick event to the entire document
document.addEventListener("click", changeBackgroundColor);