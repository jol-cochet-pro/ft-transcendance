import Component from "../react/component";


export default class Footer extends Component
{

    private onClick(url: string) {
        // TODO make on click with links
        console.log(url);
    }

    render(): string {
        return `
            <footer class="flex flex-col md:flex-row w-full items-center md:justify-evenly py-16 gap-8 bg-background">
                <img src="/logo.png" alt="logo" width=160 />
                <div class="flex gap-8">
                    <div class="flex flex-col gap-2">
                        <h3> Games </h3>
                        <p onClick=${this.func(() => this.onClick("blackjack"))}> Blackjack </p>
                        <p onClick=${this.func(() => this.onClick("roulette"))}> Roulette </p>
                        <p onClick=${this.func(() => this.onClick("slot-machine"))}> Machine à sous </p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h3> Liens rapides </h3>
                        <p onClick=${this.func(() => this.onClick("landing-page"))}> Accueil </p>
                        <p onClick=${this.func(() => this.onClick("profile"))}> Profile </p>
                    </div>
                </div>
                <div>
                    <h1> Besoin d'aide ? </h1> 
                    <h3> Dommage </h3>
                </div>
            </footer>
        `;
    }
}