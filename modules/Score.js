import Game from './Game.js';

class Score {
	constructor() {
		this.color = "#FFF";
	}

	draw() {
		Game.context.fillStyle = this.color;
		Game.context.fillText(`SCORE: 2`, 20, 20);
	}
}

export default Score;