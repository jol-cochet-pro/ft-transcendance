import Component from "../../react/component";

export default class UserInfos extends Component
{
    private _imgUrl: string;
    private _name: string;
    private _title: string;
    private _money: number;

    constructor(imgUrl: string, name: string, title: string, money: number) {
        super()
        this._imgUrl = imgUrl;
        this._name = name;
        this._title = title;
        this._money = money;
    }

    public render(): string {
        const formatter = Intl.NumberFormat("fr-FR");
        return `
            <section class="flex flex-col md:flex-row gap-4 justify-between">
                <div class="flex gap-8">
                    <img src="/${this._imgUrl}" alt="profile-picture" width=200 />
                    <div class="flex flex-col">
                        <h1> ${this._name} </h1>
                        <h3> ${this._title} </h3>
                    </div>
                </div>
                <div class="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg gap-4 bg-surface">
                    <h3> You're worth </h3>
                    <h1 class="flex items-center gap-8"> 
                        <span> ${formatter.format(this._money)} </span>
                        <i data-lucide="banknote" class="w-12 h-12 stroke-primary"></i>
                    </h1>
                </div>
            </section>
        `
    }
}