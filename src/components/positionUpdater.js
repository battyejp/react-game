function positionUpdater(size) {

    const updatethisPosition = () => {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x + this.radius >= size.width) {
          this.vx = -this.vx;
          this.x = size.width - this.radius;
        }
        if (this.x - this.radius <= 0) {
          this.vx = -this.vx;
          this.x = this.radius;
        }
        if (this.y + this.radius >= size.height) {
          this.vy = -this.vy;
          this.y = size.height - this.radius;
        }
        if (this.y - this.radius <= 0) {
          this.vy = -this.vy;
          this.y = this.radius;
        }
      };

    updatethisPosition();
  }
  
  export default positionUpdater;