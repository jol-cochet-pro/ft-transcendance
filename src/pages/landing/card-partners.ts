import Component from "../../react/component";

export default class CardPartners extends Component
{
    private _name: string;
    private _imgUrl: string;

    constructor(name: string, imgUrl: string) {
        super()
        this._name = name;
        this._imgUrl = imgUrl;
    }

    render(): string {
        return `
            <div class="flex flex-col items-center gap-2">
                <img src=${this._imgUrl} alt="logo" width="80" />
                <p class="text-white text-sm">${this._name}</p>
            </div>
        `;
    }
}