import Component from '../react/component'
import React from '../react/react';

export default class Navbar extends Component {
    private onClick(url: string) {
        const el = document.getElementById(url);
        if (!el) return ;
        el.scrollIntoView({
            behavior: "smooth"
        });
    }

    private onLogoClick() {
        React.navigate("/");
    }

    private onProfileClick() {
        React.navigate("/user");
    }

    public render(): string {
        const formatter = Intl.NumberFormat("fr-FR");
        return `
            <nav class="flex justify-between items-center w-full p-3">
                <img src="/logo.png" alt="logo" width=70 onClick=${this.func(() => this.onLogoClick())} />
                <div class="hidden sm:flex gap-6">
                    <button class="text-white transition hover:scale-110" onClick=${this.func(() => this.onClick('leaderboard'))}> Leaderboard </button>
                    <button class="text-white transition hover:scale-110" onClick=${this.func(() => this.onClick('games'))}> Jeux </button>
                    <button class="text-white transition hover:scale-110" onClick=${this.func(() => this.onClick('story'))}> Histoire </button>
                    <button class="text-white transition hover:scale-110" onClick=${this.func(() => this.onClick('testimonials'))}> Avis </button>
                    <button class="text-white transition hover:scale-110" onClick=${this.func(() => this.onClick('partners'))}> Partenaires </button>
                </div>
                <button class="flex gap-3 transition-colors duration-200 hover:bg-surface rounded-lg p-2" onClick=${this.func(() => this.onProfileClick())}>
                    <div class="flex flex-col">
                        <h3> Jolan Cochet </h3>
                        <h3 class="flex items-center gap-2 opacity-70">                    
                            <span> ${formatter.format(154214)} </span>
                            <i data-lucide="banknote" class="w-6 h-6 stroke-primary"></i>
                        </h3>
                    </div>
                    <img src="/pp.png" alt="profile picture" class="w-12 aspect-square" />
                </button>
            </nav>
        `
    }
}
