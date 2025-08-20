import Component from "./component";


export default class Canvas extends Component
{
    private _renderCanvas: (canvas: HTMLCanvasElement) => void;

    constructor(renderCanvas: (canvas: HTMLCanvasElement) => void) {
        super();
        this._renderCanvas = renderCanvas;
    }

    public render(): string {
        return `<canvas class="w-full" onload="${this.register((el) => this._renderCanvas(el as HTMLCanvasElement))}"> </canvas>`
    }
}