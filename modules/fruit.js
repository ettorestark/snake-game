class Fruit {
	constructor(ctx, scale, rows, columns) {
		this.ctx = ctx;
		this.scale = scale;
		this.rows = rows;
		this.columns = columns;
		this.x = 0;
		this.y = 0;
	}

	pickLocation() {
		this.x = (Math.floor(Math.random() * this.rows -1) + 1) * this.scale;
		this.y = (Math.floor(Math.random() * this.columns -1) + 1) * this.scale;
	}

	draw() {
		this.ctx.fillStyle = "#00EEAA";
		this.ctx.fillRect(this.x, this.y, this.scale, this.scale);
	}
}

export default Fruit;