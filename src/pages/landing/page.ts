import Component from '../component'
import Navbar from '../../components/navbar'

export default class LandingPage extends Component {
    public onNavClick() { }

    public render(): string {
        return `
            ${new Navbar()}
        `;
    }
}
