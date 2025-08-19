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
        React.navigate("/profile/me");
    }

    public render(): string {
        return `
            <nav class="flex justify-between items-center w-full p-3">
                <img src="/logo.png" alt="logo" width=70 onClick=${this.register(() => this.onLogoClick())} />
                <div class="hidden sm:flex gap-6">
                    <button class="text-white transition hover:scale-110" onClick=${this.register(() => this.onClick('leaderboard'))}> Leaderboard </button>
                    <button class="text-white transition hover:scale-110" onClick=${this.register(() => this.onClick('games'))}> Jeux </button>
                    <button class="text-white transition hover:scale-110" onClick=${this.register(() => this.onClick('story'))}> Histoire </button>
                    <button class="text-white transition hover:scale-110" onClick=${this.register(() => this.onClick('testimonials'))}> Avis </button>
                    <button class="text-white transition hover:scale-110" onClick=${this.register(() => this.onClick('partners'))}> Partenaires </button>
                </div>
                <div class="flex gap-3" onClick=${this.register(() => this.onProfileClick())}>
                    <div class="flex flex-col">
                        <span class="text-white text-xs font-semibold"> Jolan Cochet </span>
                        <span class="text-white text-xs font-semibold opacity-70"> 154121 € </span>
                    </div>
                    <img src="/pp.png" alt="profile picture" width=30 />
                </div>
            </nav>
        `
    }
}
