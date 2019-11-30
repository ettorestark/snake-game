import Game from './Game.js'

class Snake {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.xSpeed = Game.scale*1;
		this.ySpeed = 0;
		this.total = 0;
		this.tail = [];
	}

	draw() {
		for(let i=0; i<this.tail.length; i++) {
			Game.context.fillRect(this.tail[i].x, this.tail[i].y, Game.scale, Game.scale);
		}

		Game.context.fillStyle = '#000';
		Game.context.fillRect(this.x, this.y, Game.scale, Game.scale);
	}

	update() {
		for(let i=0; i<this.tail.length - 1; i++) {
			this.tail[i] = this.tail[i+1];
		}

		this.tail[this.total -1] = { x: this.x, y: this.y };

		this.x += this.xSpeed;
		this.y += this.ySpeed;

		if(this.x > Game.canvas.width) {
			this.x = 0;
		}

		if(this.y > Game.canvas.height) {
			this.y = 0;
		}

		if(this.x < 0) {
			this.x = Game.canvas.width;
		}

		if(this.y < 0) {
			this.y = Game.canvas.height;
		}
	}

	changeDirection(direction) {
		switch(direction) {
			case 'Up':
				this.xSpeed = 0;
				this.ySpeed = -Game.scale * 1;
				break;

			case 'Down':
				this.xSpeed = 0;
				this.ySpeed = Game.scale * 1;
				break;

			case 'Left':
				this.xSpeed = -Game.scale * 1;
				this.ySpeed = 0;
				break;

			case 'Right':
				this.xSpeed = Game.scale * 1;
				this.ySpeed = 0;
				break;
		}
	}

	eat(fruit) {
		if(this.x === fruit.x && this.y === fruit.y) {
			this.total++;
			return true;
		}

		return false;
	}

	checkColision() {
		for(let i=0; i<this.tail.length; i++) {
			if(this.x === this.tail[i].x && this.y === this.tail[i].y) {
				this.total = 0;
				this.tail = [];
			}
		}
	}
}

export default Snake;