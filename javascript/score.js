class Score {
    constructor(context) {
        this.context = context;
        this.score = 0;
    }

    draw() {
        context.font = '16px Orbitron';
        context.fillText(this.getCurrentScore(), 10, 20);
    }

    getCurrentScore() {
        return "Score: " + this.score;
    }

    increment(amount) {
        this.score += amount;
    }

    decrement(amount) {
        this.score -= amount;
    }
}