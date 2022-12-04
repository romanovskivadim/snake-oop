export interface CanvasInterface {
    element: HTMLCanvasElement;
    context: CanvasRenderingContext2D | null;
}
export default class Canvas implements CanvasInterface {
    element: HTMLCanvasElement;
    context: CanvasRenderingContext2D | null;
    constructor(container: any);
}
