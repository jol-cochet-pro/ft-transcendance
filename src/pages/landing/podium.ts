import Component from '../../react/component'

export default class Podium extends Component {
    private _rank: 1 | 2 | 3;
    private _name: string;
    private _euros: number;

    private rankToStyle(rank: 1 | 2 | 3) {
        switch(rank) {
            case 1:
                return { color: "#D7C33C", size: 200 };
            case 2:
                return { color: "#B0B3C3", size: 150 };
            case 3:
                return { color: "#C67B4E", size: 150 };
        } 
    }

    constructor(rank: 1 | 2 | 3, name: string, euros: number) {
        super()
        this._rank = rank;
        this._name = name;
        this._euros = euros;
    }



    public render(): string {
        const { color, size } = this.rankToStyle(this._rank);
        return `
            <div class="flex flex-col gap-8">
                <div class="flex flex-col items-center gap-2">
                    <img src="pp.png" alt="profile picture" width=40 />
                    <h3 class="text-white text-sm font-semibold"> ${this._name} </h3>
                </div>
                <div class="relative flex flex-col justify-center items-center bg-gradient-to-b from-surface to-black w-[200px] rounded-t-lg" style="height: ${size}px">
                    <div class="absolute rounded-lg w-fit p-1.5 top-0 left-[50%] -translate-[50%]" style="background-color: ${color}">
                        <i data-lucide="trophy" class="stroke-[#EDEDEDED]" ></i>
                    </div>
                    <h3 class="text-white text-sm font-semibold"> ${this._euros} </h3>
                    <p class="text-white text-xs"> euros gagnés </p>
                </div>
            </div> 
        `
    }
}
