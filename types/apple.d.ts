import { CanvasInterface } from "canvas";
import { ConfigInterface } from "./gameConfig";
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
    constructor(canvas: CanvasInterface);
    draw(context: any): void;
    randomPosition(): void;
}
