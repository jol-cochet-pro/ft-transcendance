import Component from "../react/component";


export default class Footer extends Component
{

    private onClick(url: string) {
        // TODO make on click with links
        console.log(url);
    }

    render(): string {
        return `
            <footer class="flex w-full justify-evenly py-32 bg-background">
                <img src="logo.png" alt="logo" width=160 />
                <div class="flex flex-col gap-2">
                    <h3 class="text-white text-sm font-semibold"> Games </h3>
                    <p class="text-white text-sm" onClick=${this.register(() => this.onClick("blackjack"))}> Blackjack </p>
                    <p class="text-white text-sm" onClick=${this.register(() => this.onClick("roulette"))}> Roulette </p>
                    <p class="text-white text-sm" onClick=${this.register(() => this.onClick("slot-machine"))}> Machine à sous </p>
                </div>
                <div class="flex flex-col gap-2">
                    <h3 class="text-white text-sm font-semibold"> Liens rapides </h3>
                    <p class="text-white text-sm" onClick=${this.register(() => this.onClick("landing-page"))}> Accueil </p>
                    <p class="text-white text-sm" onClick=${this.register(() => this.onClick("profile"))}> Profile </p>
                </div>
                <div>
                    <h1 class="text-white text-3xl font-semibold"> Besoin d'aide ? </h1> 
                    <h3 class="text-white text-sm font-semibold"> Dommage </h3>
                </div>
            </footer>
        `;
    }
}