import Canvas from "../../react/canvas";
import Component from "../../react/component";


export default class Statistics extends Component
{
    public renderCanvas(canvas: HTMLCanvasElement) {
        return ;
    }

    public render(): string {
        return `
            <section class="flex flex-col gap-3">
                <h2> Statistiques </h2>
                <div class="grid gap-2">
                    <div class="flex flex-col w-full min-w-400px bg-surface p-4 rounded-lg gap-4 items-end">
                        ${new Canvas(this.renderCanvas)}
                    </div>
                </div>
            </section>
        `;
    }

}