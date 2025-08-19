import Component from '../../react/component'
import React from '../../react/react'

export default class NotFoundPage extends Component {
    private onClick() {
        React.navigate("/");
    }

    public render(): string {
        return `
            <section class="w-screen h-screen flex flex-col gap-4 items-center justify-center">
                <img class="w-[50%]" src="/rich-people.png" alt="rich-people" />
                <h1> La page n'existe plus... </h1>
                <button class="text-background bg-primary w-fit px-6 py-2 rounded-full whitespace-nowrap transition-opacity hover:opacity-80" onClick=${this.register(() => this.onClick())}> Retouner à l'accueil </button>
            </section>
        `
    }
}
