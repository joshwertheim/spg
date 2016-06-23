class Enemy {

    constructor(x, y, radius, context) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.context = context;
        this.player = null;
        this.player_dir = {};
        this.status = 1;
    }

    draw() {
        // draw the enemy
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        context.fillStyle = "red";
        context.strokeStyle = "gray";
        context.stroke();
        context.fill();
        context.closePath();
    }

    setPlayer(player) {
        this.player = player;
    }

    calculateDirectionVectors() {
        var SPEED = 1.5;
        var dir = { x: (this.player.x - this.x), y: (this.player.y - this.y) }
        var hyp = Math.sqrt(dir.x*dir.x + dir.y*dir.y);
        dir.x /= hyp;
        dir.y /= hyp;

        this.x += dir.x*SPEED;
        this.y += dir.y*SPEED;
    }

    setX (x) {
        this.x = x;
    }

    setY (y) {
        this.y = y;
    }
}