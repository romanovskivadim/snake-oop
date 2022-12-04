import Config, { ConfigInterface } from "./gameConfig";

export default class GameEngine {
    config: ConfigInterface;
    update: () => void;
    draw: () => void;

    constructor(update: () => void, draw: () => void) {
        this.update = update;
        this.draw = draw;
        this.config = new Config();
        this.animate = this.animate.bind(this);
        this.animate();

    }

    animate() {
        requestAnimationFrame(this.animate);
        if (++this.config.step < this.config.maxStep) {
            return;
        }
        this.config.step = 0;
        this.update();
        this.draw();
    }

}