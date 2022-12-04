import GameConfig from "./gameConfig.js";
import { getRandomNumber } from "./helpers.js";

export default class Apple {
    constructor(canvas) {
        this.x = 0;
        this.y = 0;
        this.canvas = canvas;
        this.config = new GameConfig();
        this.randomPosition();
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = "#9a3232";
        context.arc(this.x + (this.config.sizeCell / 2), this.y + (this.config.sizeCell / 2), this.config.sizeBerry, 0, 2 * Math.PI);
        context.fill();
    }

    randomPosition() {
        this.x = getRandomNumber( 0, this.canvas.element.width / this.config.sizeCell) * this.config.sizeCell;
        this.y = getRandomNumber( 0, this.canvas.element.height / this.config.sizeCell) * this.config.sizeCell;
    }
}