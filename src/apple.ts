import { CanvasInterface } from "canvas";
import GameConfig, { ConfigInterface } from "./gameConfig";
import { getRandomNumber } from "./helpers";

export interface AppleInterface {
    x: number;
    y: number;
    canvas: CanvasInterface;
    config: ConfigInterface;

    draw: (context: CanvasRenderingContext2D | null) => void;
    randomPosition: () => void;
}

export default class Apple implements AppleInterface {
    x: number;
    y: number;
    canvas: CanvasInterface;
    config: ConfigInterface;

    constructor(canvas: CanvasInterface) {
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