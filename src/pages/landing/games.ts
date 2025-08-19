import Component from '../../react/component'
import CardGame from './card-game'

export default class Games extends Component {
    render(): string {
        return `
            <section id="games" class="flex flex-col items-center p-8 gap-6">
                <h2> Jeux </h2>
                <div class="flex gap-4 items-end p-4">
                    ${new CardGame('Blackjack', 'Jeu de cartes emblématique, le blackjack mêle stratégie et tension à chaque main face au croupier.', 'blackjack.png')}
                    ${new CardGame('Machine à sous', 'Une expérience ludique et rapide, où chaque tour peut faire basculer la chance en un instant.', 'slot-machine.png')}
                    ${new CardGame('Roulette', 'Le jeu de hasard emblématique des casinos, où suspense et adrénaline tournent au rythme de la bille.', 'roulette.png')}
                </div>
                <hr class="w-screen bg-gradient-to-r from-background from-30% via to-70% via-background h-[1px] border-0" />
            </section>
        `
    }
}
