export interface ConfigInterface {
	step: number,
	maxStep: number,
	sizeCell: number,
	sizeBerry: number,
}

export default class GameConfig implements ConfigInterface {
	step: number;
	maxStep: number;
	sizeCell: number;
	sizeBerry: number;

	constructor() {
		this.step = 0;
		this.maxStep = 6;
		this.sizeCell = 16;
		this.sizeBerry = this.sizeCell / 4;
	}
}