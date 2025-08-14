import Component from '../../react/component'

export default class Story extends Component {
  render(): string {
    return `
            <section class="flex flex-col items-center p-8 gap-6">
                <h2 class="text-white text-2xl font-semibold"> Jeux </h2>
                <div class="flex gap-24 items-center p-4 w-[70%]">
                  <img src="logo.png" alt="logo" width=400 />
                  <p class="text-white text-sm"> L'histoire du K'Zino remonte aux années 1950, lorsque cinq frères vivant dans une pauvreté extrême décidèrent de se révolter contre une société qui les avait toujours laissés de côté. Leur idée : créer un casino en ligne solidaire, pour redistribuer l'argent qu'ils n'avaient jamais eu à ceux qui en avaient besoin.<br><br>
Après des mois de travail acharné, le site vit enfin le jour. En à peine un mois, des millions de joueurs y affluèrent, séduits par l'initiative. Le succès fut tel que les créateurs du K'Zino reçurent un prix Nobel de la paix et de la générosité, saluant leur vision unique d'un monde plus juste.</p>
                </div>
            </section>
        `
  }
}