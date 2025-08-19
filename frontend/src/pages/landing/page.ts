import Component from '../../react/component'
import Navbar from '../../components/navbar'
import CallToAction from './call-to-action'
import Leaderboard from './leaderboard'
import Games from './games'
import Story from './story'
import Testimonials from './testimonials'
import Partners from './partners'
import Footer from '../../components/footer'

export default class LandingPage extends Component {
    render(): string {
        return `
            <div class="flex flex-col">
                ${new Navbar()}
                ${new CallToAction()}
                ${new Leaderboard()}
                ${new Games()}
                <div class="bg-background-light">
                    ${new Story()}
                    ${new Testimonials()}
                    ${new Partners()}
                <div>
                ${new Footer()}
            </div>
        `
    }
}
