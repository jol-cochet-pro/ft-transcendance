import Component from "../../react/component";
import CardPartners from "./card-partners";

const partners = [
    { name: "Ministère de l'éducation national", imgUrl: "partners_pp/education.png" },
    { name: "Youtube Kids", imgUrl: "partners_pp/ytb-kids.png" },
    { name: "Jeux.fr", imgUrl: "partners_pp/jeux.fr.png" },
    { name: "WWF", imgUrl: "partners_pp/wwf.png" },
    { name: "NordVPN", imgUrl: "partners_pp/nord-vpn.png" },
    { name: "Kinougarde.com", imgUrl: "partners_pp/kinougarde.png" },
]

export default class Partners extends Component
{
    render(): string {
        const partnersCards = partners
            .map((partner) => new CardPartners(partner.name, partner.imgUrl))
            .join("");
        return `
            <section id="partners" class="flex flex-col items-center py-16 md:py-32 gap-8">
                <h2>Entreprises partenaires</h2>
                <div class="static md:relative"> 
                    <img class="hidden md:flex" src="/rich-people.png" alt="rich-people" />
                    <div class="static md:absolute flex flex-col md:flex-row gap-8 justify-evenly w-full md:top-[50%] md:left-[50%] md:-translate-[50%]">
                        ${partnersCards}
                    </div>
                </div>
            </section>
        `;
    }
}