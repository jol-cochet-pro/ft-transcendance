import Component from "../../react/component"
import CardGame from "./card-game";


export default class Games extends Component
{
    public render(): string {
        return `
            <section class="flex flex-col gap-3">
                <h2> Jeux </h2>
                <div class="grid lg:grid-cols-2  gap-2">
                    ${new CardGame("BLACKJACK", 32.4, 50, 100)}
                    ${new CardGame("PONG", 32.4, 50, 100)}
                    ${new CardGame("ROULETTE", 32.4, 50, 100)}
                    ${new CardGame("SLOT_MACHINE", 32.4, 50, 100)}
                <div>
            </section>
        `;
    }
} 