import Component from '../../react/component'

export default class Podium extends Component {
    private _color: string
    private _size: number

    constructor(color: string, size: number) {
        super()
        this._color = color
        this._size = size
    }

    public render(): string {
        return `
            <div class="flex flex-col gap-8">
                <div class="flex flex-col items-center gap-2">
                    <img src="pp.png" alt="profile picture" width=40 />
                    <h3 class="text-white text-sm font-semibold"> Louis Linares </h3>
                </div>
                <div class="relative flex flex-col justify-center items-center bg-gradient-to-b from-surface to-black w-[200px] rounded-t-lg" style="height: ${this._size}">
                    <div class="absolute rounded-lg w-fit p-1.5 top-0 left-[50%] -translate-[50%]" style="background-color: ${this._color}">
                        <i data-lucide="trophy" class="stroke-[#EDEDEDED]" ></i>
                    </div>
                    <h3 class="text-white text-sm font-semibold"> 340 </h3>
                    <p class="text-white text-xs"> euros gagnés </p>
                </div>
            </div> 
        `
    }
}
