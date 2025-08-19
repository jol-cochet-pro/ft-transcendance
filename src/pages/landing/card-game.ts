import Component from '../../react/component'

export default class CardGame extends Component {
    private _name: string
    private _description: string
    private _imgUrl: string

    constructor(name: string, description: string, imgUrl: string) {
        super()
        this._name = name
        this._description = description
        this._imgUrl = imgUrl
    }

    render(): string {
        return `
      <div class="relative flex transition hover:scale-110">
        <div class="absolute flex flex-col bottom-4 left-4 gap-2">
          <h1 class="text-white text-2xl font-semibold"> ${this._name} </h1>
          <p class="text-white text-sm"> ${this._description} </p>
        </div>
        <img class="rounded-lg" src="${this._imgUrl}" alt="game-img" />
      </div>
    `
    }
}
