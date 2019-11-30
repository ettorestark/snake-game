import Game from './Game.js'
import Snake from './snake.js';
import Fruit from './Fruit.js';
import Score from './Score.js'

const score = new Score();
const snake = new Snake();
const fruit = new Fruit();

fruit.pickLocation();

function animate() {
	setTimeout(() => {
		requestAnimationFrame(animate);
			Game.clear();
			score.draw();
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
