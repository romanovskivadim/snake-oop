import { ConfigInterface } from "./gameConfig";
export default class GameEngine {
    config: ConfigInterface;
    update: () => void;
    draw: () => void;
    constructor(update: () => void, draw: () => void);
    animate(): void;
}
