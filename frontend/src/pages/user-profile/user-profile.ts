import Navbar from "../../components/navbar";
import Component from "../../react/component";
import Games from "./games";
import Statistics from "./statistics";
import UserInfos from "./user-infos";

const user = {
    name: "Cooper",
    title: "Slut machine",
    money: 1512335,
    imgUrl: "pp.png"
}

export default class UserProfile extends Component
{
    public render(): string {
        return `
            <div class="flex flex-col">
                ${new Navbar()}
                <div class="flex justify-center w-full">
                    <div class="flex flex-col bg-background rounded-lg w-full xl:w-[70%] py-16 px-4 gap-12">
                        ${new UserInfos(user.imgUrl, user.name, user.title, user.money)}
                        ${new Games()}
                        ${new Statistics()}
                    </div>
                </div>
            </div>
        `; 
    }
}