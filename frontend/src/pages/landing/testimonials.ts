import Component from '../../react/component'
import CardTestimonial from './card-testimonial'

// TODO Ajouter des description marrantes
const testimonials = [
  { name: "John Doe", description: "Merci beaucoup ! J'ai gagné 5000euros en seulement 20 jours. Je vais enfin pouvoir payer mon loyer à la maison de retraite. Encore merci Le K'Zino !", imgUrl: "testimonials_pp/papi.png" },
  { name: "Timmy Turner", description: "Enfin un site de K'Zino qui ne nous arnaque pas ! J'ai joué à la roulette toutes la nuit et je peux enfin dire au revoir à mes parrains qui étaient  beaucoup trop envahissants !", imgUrl: "testimonials_pp/timmy.png" },
  { name: "Perry The Platypus", description: "Prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr10000€rrrrrrrrrrrrrrrrrrrrrrrrrrrrr.", imgUrl: "testimonials_pp/perry.png" },
  { name: "Zerator", description: "10000 BAAAAAAAAAAAAALLES.", imgUrl: "testimonials_pp/zerator.png" },
  { name: "Delphine", description: "Jean à gagné 500€ sur ce site de folie ! Merci beaucoup K'Zino pour cette expérience ! Il nous a saucer ce malade !", imgUrl: "testimonials_pp/delphine.png" },
]

export default class Testimonials extends Component {
  render(): string {
    const testimonialCards = testimonials
      .map((testimonial) => new CardTestimonial(testimonial.name, testimonial.description, testimonial.imgUrl))
      .join("");
    return `
      <section id="testimonials" class="flex flex-col items-center py-16 md:py-32 gap-6">
        <h2>Avis</h2>
        <div class="relative w-[90%] h-[300px] overflow-hidden rounded-lg before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-20 before:bg-gradient-to-r before:from-background-light before:to-transparent after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-20 after:bg-gradient-to-l after:from-background-light after:to-transparent">
          <div class="absolute top-[50%] -translate-y-[50%] flex gap-10 p-4 slider-anim">
            ${testimonialCards}
            ${testimonialCards}
          </div>
        </div>
      </section>
    `
  }
}