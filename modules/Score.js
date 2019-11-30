import Game from './Game.js';

class Score {
	constructor() {
		this.score = 0;
		this.color = "#FFF";
		this.observers = [];
	}

	increment() {
		this.score++;
	}

	reset() {
		this.score = 0;
	}

	draw() {
		Game.context.fillStyle = this.color;
		Game.context.fillText(`SCORE: ${this.score}`, 20, 20);
	}
}

export default Score;