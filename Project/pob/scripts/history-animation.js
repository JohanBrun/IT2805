const canvas = document.getElementById('timeline');
canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight * 2)
const context = canvas.getContext('2d');

const canvasWidth = canvas.offsetWidth;
const canvasHeight = canvas.offsetHeight;

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

/* Drawing the timeline */
drawLine(canvasWidth / 2 - 5, 0, 10, canvasHeight)

let vertPosition = 500;
let i = 1;
while (vertPosition < canvasHeight - 200) {
  console.log(document.documentElement.scrollTop);
  drawLine(canvasWidth / 2, vertPosition, 50 * i, 6);
  if (vertPosition === document.documentElement.scrollTop - 400) {
    drawCircle(canvasWidth / 2 + 150 * i, vertPosition + 3, 100);
  } else {
    drawCircle(canvasWidth / 2 + 80 * i, vertPosition + 3, 30);
  }
  i = -i;
  vertPosition += 200;
}

window.onscroll = () => {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  drawLine(canvasWidth / 2 - 5, 0, 10, canvasHeight)
  let vertPosition = 500;
  let i = 1;
  while (vertPosition < canvasHeight - 200) {
    drawLine(canvasWidth / 2, vertPosition, 50 * i, 6);
    if (vertPosition === document.documentElement.scrollTop + 400) {
      drawCircle(canvasWidth / 2 + 150 * i, vertPosition + 3, 100);
    } else {
      drawCircle(canvasWidth / 2 + 80 * i, vertPosition + 3, 30);
    }
    i = -i;
    vertPosition += 200;
  }
}