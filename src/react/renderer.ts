import type Component from "../pages/component";


export default class HTMLRenderer {
    public render(page: Component) {
        const app = document.querySelector("#app");
        app!.innerHTML = "";
        const html = this.parse(page);
        app!.appendChild(html);
    }

    private parse(page: Component): ChildNode {
        const htmlStr: string = page.render();
        const parser = new DOMParser();

        const html = parser.parseFromString(htmlStr, "text/html");
        const body = html.body;
        const element = body.firstChild;
        if (!element) {
            throw new Error("Error in template");
        }
        for (const clickable of body.querySelectorAll("[onclick]")) {
            const ftnname = clickable.getAttribute("onclick");
            if (!ftnname) {
                continue;
            }
            if (!page[ftnname]) {
                throw new Error("Function doesn't exists");
            }
            clickable.setAttribute("onclick", "");
            clickable.addEventListener("click", page[ftnname]);
        }
        return element;
    }

}