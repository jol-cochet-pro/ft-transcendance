import Component from "../../react/component";

export type GameType = "BLACKJACK" | "PONG" | "ROULETTE" | "SLOT_MACHINE"

export default class CardGame extends Component
{
    private _gameType: GameType;
    private _timePlayed: number;
    private _gamePlayed: number;
    private _moneyWon: number;

    constructor(gameType: GameType, timePlayed: number, gamePlayed: number, moneyWon: number) {
        super();
        this._gameType = gameType;
        this._timePlayed = timePlayed;
        this._gamePlayed = gamePlayed;
        this._moneyWon = moneyWon;
    }

    private getGameData() {
        switch (this._gameType) {
            case "BLACKJACK":
                return { imgUrl: "blackjack.png", name: "Blackjack" };
            case "PONG":
                return { imgUrl: "pong.png", name: "Pong" };
            case "ROULETTE":
                return { imgUrl: "roulette.png", name: "Roulette" };
            case "SLOT_MACHINE":
                return { imgUrl: "slot-machine.png", name: "Machine à sous" }
        }
    }

    private onClick() {
        // TODO Add onclick
        console.log("ocucou");
    }

    public render(): string {
        const gameData = this.getGameData();
        return `
            <div class="flex flex-col w-full min-w-400px bg-surface p-8 rounded-lg gap-4 items-end">
                <div class="flex flex-col sm:flex-row gap-4 items-start w-full">
                    <img class="rounded-lg object-cover filter brightness-60 aspect-6/5 w-full sm:w-[200px]" src="/${gameData.imgUrl}" alt="game-img" />
                    <div class="flex flex-col gap-2">
                        <h2> ${gameData.name} </h2>
                        <h3 class="flex items-center gap-2 opacity-60">
                            <i data-lucide="timer"> </i>
                            ${this._timePlayed} heures
                        </h3>
                        <h3 class="flex items-center gap-2 opacity-60">
                            <i data-lucide="dice-5"> </i>
                            ${this._gamePlayed} parties jouées 
                        </h3>
                        <h3 class="flex items-center gap-2 opacity-60">
                            <i data-lucide="timer"> </i>
                            ${this._moneyWon} gagné
                        </h3>
                    </div>
                </div>
                <button class="text-background bg-primary w-fit px-6 py-3 rounded-full whitespace-nowrap transition-opacity hover:opacity-80" onClick=${this.register(this.onClick)}>
                    Jouer
                </button>
            </div>
        `;
    }
}