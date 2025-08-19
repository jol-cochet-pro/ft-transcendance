import Component from "../../react/component";

export type GameType = "BLACKJACK" | "PONG" | "ROULETTE" | "SLOT_MACHINE"

export default class CardGame extends Component
{
    private _gameType: GameType;

    constructor(gameType: GameType) {
        super();
        this._gameType = gameType;
    }

    private getImgUrl() {
        switch (this._gameType) {
            case "BLACKJACK":
                return "blackjack.png";
            case "PONG":
                return "pong.png";
            case "ROULETTE":
                return "roulette.png";
            case "SLOT_MACHINE":
                return "slot-machine.png"
        }
    }

    private onClick() {
        // TODO Add onclick
        console.log("ocucou");
    }

    public render(): string {
        return `
            <div class="flex flex-col bg-surface p-8 rounded-lg">
                <div class="flex gap-4">
                    <img class="rounded-lg object-cover filter brightness-60 w-[240px] h-[200px]" src="/${this.getImgUrl()}" alt="game-img" />
                </div>
                <button class="text-background bg-primary w-fit px-6 py-3 rounded-full whitespace-nowrap transition-opacity hover:opacity-80" onClick=${this.register(this.onClick)}>
                    Jouer
                </button>
            </div>
        `;
    }
}