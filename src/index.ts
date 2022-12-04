import Canvas, { CanvasInterface } from "./canvas";
import GameEngine from "./gameEngine";
import Snake, { SnakeInterface } from "./snake";
import Apple, { AppleInterface } from "./apple";

class Game {
    canvas: CanvasInterface;
    snake: SnakeInterface;
    apple: AppleInterface;

    constructor(container) {
        this.canvas = new Canvas(container);
        this.snake = new Snake();
        this.apple = new Apple(this.canvas);
        new GameEngine(this.update.bind(this), this.draw.bind(this));
    }

    update() {
        this.snake.update(this.apple, this.canvas);
    }

    draw() {
        (this.canvas.context as CanvasRect).clearRect(0, 0, this.canvas.element.width, this.canvas.element.height);
        this.snake.draw(this.canvas.context);
        this.apple.draw(this.canvas.context);
    }
}

new Game(document.querySelector(".canvas"));