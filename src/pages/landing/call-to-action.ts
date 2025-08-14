import Component from '../../react/component'

export default class CallToAction extends Component {
    private onClick() {
        console.log('call to action click')
    }

    public render(): string {
        return `
            <section class="relative flex" > 
                <div class="absolute flex flex-row lg:flex-col justify-center items-center w-full gap-8 top-[50%] left-[50%] -translate-1/2 scale-75 lg:scale-100"> 
                    <div class="flex flex-col max-w-[400px] gap-6">
                        <h1 class="text-white text-3xl font-semibold italic" > “Les jeux d'argent c'est cool.” </h1>  
                        <p class="text-white text-sm font-semibold text-right"> - E. Macron </p>
                    </div>
                    <button class="text-background bg-primary w-fit px-6 py-4 rounded-full whitespace-nowrap" onClick=${this.register(this.onClick)}>
                        C'est parti
                    </button>
                </div> 
                <img src="call-to-action.png" alt="call-to-action" />
            </section>
        `
    }
}
