class Game {
	constructor() {
		this.canvas = document.createElement('canvas');
		this.canvas.width = 350;
		this.canvas.height = 350;
		this.context = this.canvas.getContext('2d');
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.scale = 10;
		this.rows = this.canvas.height / this.scale;
		this.columns = this.canvas.width / this.scale;
		this.frames = 1000 / 4;
	}

	clear() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.fillStyle = "#000";
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}
}

const instance = new Game();
Object.freeze(instance);

export default instance;