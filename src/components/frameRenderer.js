function frameRenderer(ball) {

  const drawCircle = (x, y, radius, color, alpha) => {
    this.save();
    this.beginPath();
    this.arc(x, y, radius, 0, Math.PI * 2);
    this.fillStyle = color;
    this.globalAlpha = alpha;
    this.fill();
    this.closePath();
    this.restore();
  };

  drawCircle(ball.x, ball.y, ball.radius, "#fff");
}

export default frameRenderer;
