import Game from './Game.js'

class Fruit {
	constructor() {
		this.x = 0;
		this.y = 0;
	}

	pickLocation() {
		this.x = (Math.floor(Math.random() * Game.rows -1) + 1) * Game.scale;
		this.y = (Math.floor(Math.random() * Game.columns -1) + 1) * Game.scale;
	}

	draw() {
		Game.context.fillStyle = "#00EEAA";
		Game.context.fillRect(this.x, this.y, Game.scale, Game.scale);
	}
}

export default Fruit;