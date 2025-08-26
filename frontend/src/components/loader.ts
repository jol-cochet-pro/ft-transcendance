import Component from "../react/component";


export default class Loader extends Component
{
    public render(): string {
        return `<i data-lucide="loader-circle" class="stroke-primary scale-250 animate-spin"> </i>`;
    }
}