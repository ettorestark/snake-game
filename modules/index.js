import Game from './Game.js'
import Snake from './snake.js';
import Fruit from './Fruit.js';
import Score from './Score.js'

const snake = new Snake();
const fruit = new Fruit();

fruit.pickLocation();

function animate() {
	setTimeout(() => {
		requestAnimationFrame(animate);
			Game.clear();
			snake.update();
			snake.draw();
			fruit.draw();

			if(snake.eat(fruit)) {
				fruit.pickLocation();
			}

			snake.checkColision();
	}, Game.frames);
}

animate();

window.addEventListener('keydown', (e) => {
	const direction = e.key.replace('Arrow', '');
	snake.changeDirection(direction);
});

/*
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
});*/