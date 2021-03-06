class Player {
    constructor(x, y, radius, context) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.context = context;
    }

    draw() {
        // draw the player
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        context.fillStyle = "#0095DD";
        context.fill();
        context.closePath();
    }

    setX (x) {
        this.x = x;
    }

    setY (y) {
        this.y = y;
    }
}