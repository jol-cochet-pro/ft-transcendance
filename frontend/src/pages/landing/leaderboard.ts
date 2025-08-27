import Component from '../../react/component'
import Podium from './podium'

const leaderboard = [
    { name: "Jolan Cochet", money: 350 },
    { name: "Louis Linares", money: 340 },
    { name: "Maël Pendhillas", money: 330 },
    { name: "Tom Gauthier", money: 320 },
    { name: "Clément Morel", money: 320 },
]

export default class Leaderboard extends Component {
    render(): string {
        return `
            <section data-name="leaderboard" class="flex flex-col items-center p-8 gap-6">
                <h2> Leaderboard </h2>
                <div class="flex gap-4 items-end p-4 w-[100%] min-w-[400px] max-w-[750px]">
                    ${new Podium(2, leaderboard[1].name, leaderboard[1].money)}    
                    ${new Podium(1, leaderboard[0].name, leaderboard[0].money)}    
                    ${new Podium(3, leaderboard[2].name, leaderboard[2].money)}    
                </div>
                <hr class="bg-gradient-to-r from-background from-30% via to-70% via-background h-[1px] border-0" />
                <div class="grid grid-rows-3 grid-cols-[auto_auto_auto] gap-x-6 gap-y-2">
                    <h3 class="opacity-40"> Rank </h3>
                    <h3 class="opacity-40"> Username </h3>
                    <h3 class="opacity-40"> Gain </h3>
                    <h3> 4ème </h3>
                    <h3> ${leaderboard[3].name} </h3>
                    <h3> ${leaderboard[3].money}€ </h3>
                    <h3> 5ème </h3>
                    <h3> ${leaderboard[4].name} </h3>
                    <h3> ${leaderboard[4].money}€ </h3>
                </div>
            </section>
        `
    }
}
