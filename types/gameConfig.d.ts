export interface ConfigInterface {
    step: number;
    maxStep: number;
    sizeCell: number;
    sizeBerry: number;
}
export default class GameConfig implements ConfigInterface {
    step: number;
    maxStep: number;
    sizeCell: number;
    sizeBerry: number;
    constructor();
}
