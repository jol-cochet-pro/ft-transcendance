import Component from '../../react/component'
import Podium from './podium'

export default class Leaderboard extends Component {
    render(): string {
        return `
            <section class="flex flex-col items-center p-8 gap-6">
                <h2 class="text-white text-2xl font-semibold"> Leaderboard </h2>
                <div class="flex gap-4 items-end p-4">
                    ${new Podium('#B0B3C3', 150)}    
                    ${new Podium('#D7C33C', 200)}    
                    ${new Podium('#C67B4E', 150)}    
                </div>
                <hr class="bg-gradient-to-r from-background from-30% via to-70% via-background h-[1px] border-0" />
                <div class="grid grid-rows-3 grid-cols-2 gap-x-4 gap-y-2">
                    <p class="text-white text-xs font-semibold opacity-40"> Rank </p>
                    <p class="text-white text-xs font-semibold opacity-40"> Username </p>
                    <p class="text-white text-xs font-semibold"> 4ème </p>
                    <p class="text-white text-xs font-semibold"> Tom Gauthier </p>
                    <p class="text-white text-xs font-semibold"> 5ème </p>
                    <p class="text-white text-xs font-semibold"> Clément Morel  </p>
                </div>
            </section>
        `
    }
}
