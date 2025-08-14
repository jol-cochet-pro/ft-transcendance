import Component from "../react/component";


export default class FiveStars extends Component {
  public render(): string {
    return `
      <div class="flex gap-0.5"> 
        <i data-lucide="star" class="fill-primary stroke-0 w-[15px] h-[15px]" ></i>
        <i data-lucide="star" class="fill-primary stroke-0 w-[15px] h-[15px]" ></i>
        <i data-lucide="star" class="fill-primary stroke-0 w-[15px] h-[15px]" ></i>
        <i data-lucide="star" class="fill-primary stroke-0 w-[15px] h-[15px]" ></i>
        <i data-lucide="star" class="fill-primary stroke-0 w-[15px] h-[15px]" ></i>
      </div>
    `;
  }
}