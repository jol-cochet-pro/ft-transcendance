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
                    <h3> Games </h3>
                    <p onClick=${this.register(() => this.onClick("blackjack"))}> Blackjack </p>
                    <p onClick=${this.register(() => this.onClick("roulette"))}> Roulette </p>
                    <p onClick=${this.register(() => this.onClick("slot-machine"))}> Machine à sous </p>
                </div>
                <div class="flex flex-col gap-2">
                    <h3> Liens rapides </h3>
                    <p onClick=${this.register(() => this.onClick("landing-page"))}> Accueil </p>
                    <p onClick=${this.register(() => this.onClick("profile"))}> Profile </p>
                </div>
                <div>
                    <h1> Besoin d'aide ? </h1> 
                    <h3> Dommage </h3>
                </div>
            </footer>
        `;
    }
}