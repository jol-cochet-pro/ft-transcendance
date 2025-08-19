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
            <section id="partners" class="flex flex-col items-center py-32 gap-6">
                <h2 class="text-white text-2xl font-semibold">Entreprises partenaires</h2>
                <div class="relative"> 
                    <img src="rich-people.png" alt="rich-people" />
                    <div class="absolute flex justify-evenly w-full top-[50%] left-[50%] -translate-[50%]">
                        ${partnersCards}
                    </div>
                </div>
            </section>
        `;
    }
}