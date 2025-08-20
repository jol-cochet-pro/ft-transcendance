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
      <div class="relative flex transition hover:scale-110 w-[350px] h-[450px]">
        <div class="absolute flex flex-col bottom-4 left-4 gap-2 z-1">
          <h2> ${this._name} </h1>
          <p> ${this._description} </p>
        </div>
        <img class="rounded-lg object-cover filter blur-[2px] brightness-60" src="/${this._imgUrl}" alt="game-img" />
      </div>
    `
    }
}
