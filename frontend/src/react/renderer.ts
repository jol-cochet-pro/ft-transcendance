import Component from "./component";
import { createIcons, icons } from "lucide";

export default class HTMLRenderer {
    private static _instance: HTMLRenderer | null = null;

    private constructor() {}

    public static get instance(): HTMLRenderer {
        if (!this._instance) {
            this._instance = new HTMLRenderer();
        }
        return this._instance;
    }

    public render(page: Component): void {
        const app = document.getElementById("app");
        if (!app) throw new Error("#app introuvable");

        app.innerHTML = "";
        app.appendChild(this.build(page));
        createIcons({ icons });
    }

    public refresh(page: Component): void {
        const oldElement = document.getElementById(`__child__${page.id}`);
        if (!oldElement) return;

        const newElement = this.build(page);
        oldElement.replaceWith(newElement);
        createIcons({ icons });
    }

    private build(page: Component): HTMLElement {
        const htmlStr = page.completeRender();
        const element = this.parseHTML(htmlStr);

        this.addChildren(element);
        this.addEventListeners(element);

        return element;
    }

    private parseHTML(htmlStr: string): HTMLElement {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlStr, "text/html");
        const element = doc.body.firstElementChild as HTMLElement | null;

        if (!element) {
            throw new Error("Template vide ou invalide");
        }
        return element;
    }

    private addEventListeners(root: HTMLElement): void {
        root.querySelectorAll<HTMLElement>("[onclick]").forEach(el => {
            const id = el.getAttribute("onclick");
            if (id && Component.handlers[id]) {
                el.removeAttribute("onclick");
                el.addEventListener("click", () => Component.handlers[id](el));
            }
        });

        root.querySelectorAll<HTMLCanvasElement>("canvas[onload]").forEach(canvas => {
            const id = canvas.getAttribute("onload");
            if (id && Component.handlers[id]) {
                canvas.removeAttribute("onload");
                Component.handlers[id](canvas);
            }
        });
    }

    private addChildren(root: HTMLElement): void {
        root.querySelectorAll<HTMLElement>("template[id^='__child__']").forEach(child => {
            const comp = Component.children[child.id];
            if (!comp) return;

            const element = this.parseHTML(comp.completeRender());
            element.id = child.id;

            this.addChildren(element);
            this.addEventListeners(element);

            child.replaceWith(element);
        });
    }
}
