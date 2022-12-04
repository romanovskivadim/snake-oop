// @ts-nocheck
import Canvas from "./canvas.js";
import GameEngine from "./gameEngine.js";
import Snake from "./snake.js";
import Apple from "./apple.js";

class Game {
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
        this.canvas.context.clearRect(0, 0, this.canvas.element.width, this.canvas.element.height);
        this.snake.draw(this.canvas.context);
        this.apple.draw(this.canvas.context);
    }
}

new Game(document.querySelector(".canvas"));