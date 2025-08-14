import Component from '../../react/component'
import Navbar from '../../components/navbar'

export default class LandingPage extends Component {
    public render(): string {
        return `
            <div class="flex flex-col gap-4">
                ${new Navbar()}
            </div>
        `;
    }
}