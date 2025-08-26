import { Chart, registerables } from "chart.js";
import Component from "./component";

Chart.register(...registerables);

export default class Canvas extends Component
{
    private _renderCanvas: (canvas: HTMLCanvasElement) => void;

    constructor(renderCanvas: (canvas: HTMLCanvasElement) => void) {
        super();
        this._renderCanvas = renderCanvas;
    }

    private _registerCanvas() {
        return this.func((el) => { 
            const canvas = el as HTMLCanvasElement
            if (!canvas.isConnected || !canvas.ownerDocument?.defaultView) {
                requestAnimationFrame(() => this._renderCanvas(canvas))
                return;
            }
            this._renderCanvas(canvas)
        })
    }

    public render(): string {
        return `<canvas class="w-full" onload="${this._registerCanvas()}"> </canvas>`
    }
}