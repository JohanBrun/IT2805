const canvas = document.getElementById('timeline');
canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight * 2)
const context = canvas.getContext('2d');

const canvasWidth = canvas.offsetWidth;
const canvasHeight = canvas.offsetHeight;
const midtPoint = canvasWidth / 2;

drawLine = (x, y, width, height) => {
  context.beginPath();
  context.rect(x, y, width, height)
  context.fillStyle = '#F2F0E4';
  context.fill();
}

drawCircle = (cx, cy, r) => {
  context.beginPath();
  context.arc(cx, cy, r, 0, 2 * Math.PI);
  context.strokeStyle = '#F2F0E4';
  context.lineWidth = 6;
  context.fillStyle = '#403C28';
  context.stroke();
  context.fill();
}

drawEllipse = (cx, cy, rx, ry) => {
  context.beginPath();
  context.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  context.strokeStyle = '#F2F0E4';
  context.lineWidth = 6;
  context.fillStyle = '#403C28';
  context.stroke();
  context.fill();
}

checkScrollPosition = (vertPosition) => {
  return vertPosition >= document.documentElement.scrollTop + 350 && vertPosition <= document.documentElement.scrollTop + 450
}

/* Drawing the timeline */
renderTimeline = () => {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  drawLine(midtPoint - 5, 0, 10, canvasHeight)
  let vertPosition = 500;
  let i = 1;
  while (vertPosition < canvasHeight - 200) {
    drawLine(midtPoint, vertPosition, 50 * i, 6);
    if (checkScrollPosition(vertPosition)) {
      drawEllipse(midtPoint + 350 * i, vertPosition + 3, 300, 150);
    } else {
      drawCircle(canvasWidth / 2 + 80 * i, vertPosition + 3, 30);
    }
    i = -i;
    vertPosition += 200;
  }
}

renderTimeline();

window.onscroll = () => {
  renderTimeline();
}