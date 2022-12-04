import { AppleInterface } from "apple";
import { CanvasInterface } from "canvas";
import { ConfigInterface } from "./gameConfig";
export interface SnakeInterface {
    config: ConfigInterface;
    x: number;
    y: number;
    dx: number;
    dy: number;
    tails: Tail[];
    maxTails: number;
    update: (apple: AppleInterface, canvas: CanvasInterface) => void;
    draw: (context: CanvasRenderingContext2D | null) => void;
    death: () => void;
    control: () => void;
}
type Tail = {
    x: number;
    y: number;
};
export default class Snake implements SnakeInterface {
    config: ConfigInterface;
    x: number;
    y: number;
    dx: number;
    dy: number;
    tails: Tail[];
    maxTails: number;
    constructor();
    update(apple: any, canvas: any): void;
    draw(context: any): void;
    death(): void;
    control(): void;
}
export {};
