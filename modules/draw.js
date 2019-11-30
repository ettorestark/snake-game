import Snake from './snake.js';
import Fruit from './fruit.js';

const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext('2d');
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;
var fruit;

(function setup() {
	snake = new Snake(canvas, ctx, scale);
	fruit = new Fruit(ctx, scale, rows, columns);

	fruit.pickLocation();

	window.setInterval(() => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		snake.update();
		fruit.draw();
		snake.draw();

		if(snake.eat(fruit)) {
			fruit.pickLocation();
		}

		snake.checkColision();

	}, 250);
})();

window.addEventListener('keydown', (e) => {
	const direction = e.key.replace('Arrow', '');
	snake.changeDirection(direction);
});