import Component from "../../react/component"
import CardGame from "./card-game";


export default class Games extends Component
{
    public render(): string {
        return `
            <section class="flex flex-col">
                <h2> Jeux </h2>
                <div class="grid grid-cols-2 grid-rows-2 gap-2">
                    ${new CardGame("BLACKJACK")}
                <div>
            </section>
        `;
    }
} 