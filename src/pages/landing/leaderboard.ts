import Component from '../../react/component'
import Podium from './podium'

const leaderboard = [
    { name: "Jolan Cochet", euros: 350 },
    { name: "Louis Linares", euros: 340 },
    { name: "Maël Pendhillas", euros: 330 },
    { name: "Tom Gauthier", euros: 320 },
    { name: "Clément Morel", euros: 320 },
]

export default class Leaderboard extends Component {
    render(): string {
        return `
            <section id="leaderboard" class="flex flex-col items-center p-8 gap-6">
                <h2> Leaderboard </h2>
                <div class="flex gap-4 items-end p-4 overflow-hidden">
                    ${new Podium(2, leaderboard[1].name, leaderboard[1].euros)}    
                    ${new Podium(1, leaderboard[0].name, leaderboard[0].euros)}    
                    ${new Podium(3, leaderboard[2].name, leaderboard[2].euros)}    
                </div>
                <hr class="bg-gradient-to-r from-background from-30% via to-70% via-background h-[1px] border-0" />
                <div class="grid grid-rows-3 grid-cols-3 gap-x-4 gap-y-2">
                    <h3 class="opacity-40"> Rank </h3>
                    <h3 class="opacity-40"> Username </h3>
                    <h3 class="opacity-40"> Gain </h3>
                    <h3> 4ème </h3>
                    <h3> ${leaderboard[3].name} </h3>
                    <h3> ${leaderboard[3].euros}€ </h3>
                    <h3> 5ème </h3>
                    <h3> ${leaderboard[4].name} </h3>
                    <h3> ${leaderboard[4].euros}€ </h3>
                </div>
            </section>
        `
    }
}
