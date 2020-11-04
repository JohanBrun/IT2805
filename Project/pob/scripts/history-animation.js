const canvas = document.getElementById('timeline');
canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight * 2)
const context = canvas.getContext('2d');

const canvasWidth = canvas.offsetWidth;
const canvasHeight = canvas.offsetHeight;
const midtPoint = canvasWidth / 2;

// To be expanded
pobHistory = [
  {
    year: '1977',
    info: 'Pirum Old Boys blir etablert'
    // Could also include a image url for showing relevant image.
  }
];

drawLine = (x, y, width, height) => {
  context.beginPath();
  context.rect(x, y, width, height)
  context.fillStyle = '#F2F0E4';
  context.fill();
}

drawText = (text, x, y) => {
  context.font = '20px Palatino Linotype'
  context.fillStyle = '#F2F0E4';
  context.textAlign = 'center';
  context.fillText(text.year, x, y - 20);
  context.fillText(text.info, x, y)
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

// Returns true if the scroll position is close to where the bubble is drawn
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
      const ellipseR = canvasWidth / 5;
      drawEllipse(midtPoint + (ellipseR + 50) * i, vertPosition + 3, ellipseR, ellipseR / 1.68);
      drawText(pobHistory[0], midtPoint + (ellipseR + 50) * i, vertPosition +3)
    } else {
      drawCircle(canvasWidth / 2 + 80 * i, vertPosition + 3, 30);
    }
    i = -i;
    vertPosition += 200;
  }
}

// Drawing before the user has started scrolling
renderTimeline();

// Callback on scrolling event
window.onscroll = () => {
  renderTimeline();
}