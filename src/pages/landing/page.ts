import Component from '../../react/component'
import Navbar from '../../components/navbar'
import CallToAction from './call-to-action'
import Leaderboard from './leaderboard'
import Games from './games'
import Story from './story'

export default class LandingPage extends Component {
    public render(): string {
        return `
            <div class="flex flex-col">
                ${new Navbar()}
                ${new CallToAction()}
                ${new Leaderboard()}
                ${new Games()}
                ${new Story()}
            </div>
        `
    }
}
