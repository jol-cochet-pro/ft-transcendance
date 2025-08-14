import Component from '../../react/component'
import Navbar from '../../components/navbar'
import React from '../../react/react';

export default class LandingPage extends Component {
    public render(): string {
        return `
            <div class="flex flex-col gap-4">
                ${new Navbar()}
                <button onClick=${this.register(() => React.navigate("/user-profile"))}> user profle </button>
            </div>
        `;
    }
}