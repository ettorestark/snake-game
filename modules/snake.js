class Snake {
	constructor(canvas, ctx, scale) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.scale = scale;
		this.x = 0;
		this.y = 0;
		this.xSpeed = scale*1;
		this.ySpeed = 0;
		this.total = 0;
		this.tail = [];
	}

	draw() {
		for(let i=0; i<this.tail.length; i++) {
			this.ctx.fillRect(this.tail[i].x, this.tail[i].y, this.scale, this.scale);
		}

		this.ctx.fillStyle = '#FFF';
		this.ctx.fillRect(this.x, this.y, this.scale, this.scale);
	}

	update() {
		for(let i=0; i<this.tail.length - 1; i++) {
			this.tail[i] = this.tail[i+1];
		}

		this.tail[this.total -1] = { x: this.x, y: this.y };

		this.x += this.xSpeed;
		this.y += this.ySpeed;

		if(this.x > this.canvas.width) {
			this.x = 0;
		}

		if(this.y > this.canvas.height) {
			this.y = 0;
		}

		if(this.x < 0) {
			this.x = this.canvas.width;
		}

		if(this.y < 0) {
			this.y = this.canvas.height;
		}
	}

	changeDirection(direction) {
		switch(direction) {
			case 'Up':
				this.xSpeed = 0;
				this.ySpeed = -this.scale * 1;
				break;
			case 'Down':
				this.xSpeed = 0;
				this.ySpeed = this.scale * 1;
				break;
			case 'Left':
				this.xSpeed = -this.scale * 1;
				this.ySpeed = 0;
				break;
			case 'Right':
				this.xSpeed = this.scale * 1;
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