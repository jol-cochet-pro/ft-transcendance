import Component from "../pages/component";


export default class Navbar extends Component {

    private onClick(url: string) {
        console.log(url);
    }

    public render(): string {
        return `
            <nav class="flex justify-between items-center w-full bg-[var(--background)] p-4">
                <img src="logo.png" alt="logo" />
                <div class="flex gap-6">
                    <button class="text-white text-xl" onClick=${this.register(() => this.onClick("leaderboard"))}> Leaderboard </button>
                    <button class="text-white text-xl" onClick=${this.register(() => this.onClick("games"))}> Jeux </button>
                    <button class="text-white text-xl" onClick=${this.register(() => this.onClick("story"))}> Histoire </button>
                    <button class="text-white text-xl" onClick=${this.register(() => this.onClick("testimonials"))}> Avis </button>
                    <button class="text-white text-xl" onClick=${this.register(() => this.onClick("partners"))}> Partenaires </button>
                </div>
                <div class="flex gap-3">
                    <div class="flex flex-col">
                        <span class="text-white text-l font-semibold"> Jolan Cochet </span>
                        <span class="text-white text-s font-semibold opacity-70"> 154121 € </span>
                    </div>
                    <img src="pp.png" alt="profile picture"/>
                </div>
            </nav>
        `;
    }
    
}