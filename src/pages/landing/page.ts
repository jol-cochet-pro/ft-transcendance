import Component from '../../react/component'
import Navbar from '../../components/navbar'
import CallToAction from './call-to-action'
import Leaderboard from './leaderboard'
import Games from './games'
import Story from './story'
import Testimonials from './testimonials'

export default class LandingPage extends Component {
    public render(): string {
        return `
            <div class="flex flex-col">
                ${new Navbar()}
                ${new CallToAction()}
                ${new Leaderboard()}
                ${new Games()}
                <div class="bg-gradient-to-b from-background-light from-16% via to-63% via-background-light">
                    ${new Story()}
                    ${new Testimonials()}
                <div>
                <div class="h-[500px]"> </div> 
            </div>
        `
    }
}
