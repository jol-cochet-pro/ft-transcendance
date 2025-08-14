import FiveStars from "../../components/five-stars";
import Component from "../../react/component";

export default class CardTestimonial extends Component {
  _id: string;
  _name: string;
  _description: string;
  _imgUrl: string;

  constructor(id: number, name: string, description: string, imgUrl: string) {
    super();
    this._id = `testimonial-card-${id}`;
    this._name = name;
    this._description = description;
    this._imgUrl = imgUrl;
  }

  render(): string {
    return `
      <div class="flex flex-col top-10 gap-2 w-[300px] h-[240px] break-words bg-background p-4 shadow-lg rounded-lg">
        <div class="flex flex-row gap-4">
          <img src="${this._imgUrl}" alt="profile picture" />
          <div class="flex flex-col gap-1">
            <h3 class="text-white text-sm font-semibold">${this._name}</h3>
            ${new FiveStars()}
          </div>
        </div> 
        <p class="text-white text-sm"> ${this._description} </p>
      </div>
    `;
  }
}