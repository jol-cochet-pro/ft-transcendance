import Component from '../../react/component'

const quotes = [
    { text: "Les jeux d'argent c'est cool.", author: "E. Macron" },
    { text: "100% des perdants on arrêter de jouer avant de gagné.", author: "Gandhi" },
    { text: "La défaite n'est qu'une étape avant la victoire.", author: "Martin Luther King" },
    { text: "L'argent gagné au jeu est deux fois plus précieux que l'argent gagné en travaillant.", author: "Martin Scorsese" },
    { text: "N'ayez pas peur de renoncer au bon pour aller vers le grand.", author: "On sait plus" },
]

export default class CallToAction extends Component {
    private onClick() {
        console.log('call to action click')
    }

    private randomInt(max: number): number {
        max = Math.floor(max);
        return Math.floor(Math.random() * (max + 1));
    }

    public render(): string {
        const quoteIndex = this.randomInt(quotes.length - 1);
        const quote = quotes[quoteIndex];
        return `
            <section class="relative flex h-[400px]" > 
                <div class="absolute flex flex-col justify-center items-center w-full gap-8 top-[50%] left-[50%] -translate-1/2 scale-75 lg:scale-100"> 
                    <div class="flex flex-col max-w-[400px] gap-6">
                        <h1 class="italic"> “${quote.text}” </h1>  
                        <p class="font-semibold text-right"> - ${quote.author} </p>
                    </div>
                    <button class="text-background bg-primary w-fit px-6 py-4 rounded-full whitespace-nowrap transition-opacity hover:opacity-80" onClick=${this.register(this.onClick)}>
                        C'est parti
                    </button>
                </div> 
                <img class="w-full object-cover" src="call-to-action.png" alt="call-to-action" />
            </section>
        `
    }
}
