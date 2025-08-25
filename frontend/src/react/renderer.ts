import Component from './component'
import { createIcons, icons } from "lucide";

export default class HTMLRenderer {
    
    public async render(page: Component) {
        const app = document.getElementById('app');
        if (!app) throw new Error("#app introuvable");
        app.innerHTML = '';
        const html = await this.parse(page);
        app.appendChild(html);
        createIcons({ icons });
    }

    private parseHTML(htmlStr: string): HTMLElement {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlStr, 'text/html');
        const element = doc.body.firstElementChild as HTMLElement | null;
        if (!element) {
            throw new Error("Template vide ou invalide");
        }
        return element;
    }

    private addEvent(root: HTMLElement) {
        for (const clickable of root.querySelectorAll<HTMLElement>('[onclick]')) {
            const id = clickable.getAttribute('onclick');
            if (id && Component.handlers[id]) {
                clickable.removeAttribute('onclick');
                clickable.addEventListener('click', () => Component.handlers[id](clickable));
            }
        }
        for (const loadable of root.querySelectorAll<HTMLElement>('canvas[onload]')) {
            const id = loadable.getAttribute('onload');
            if (id && Component.handlers[id]) {
                loadable.removeAttribute('onload');
                Component.handlers[id](loadable);
            }
        }
    }

    private async addChildren(root: HTMLElement): Promise<void> {
        const children = root.querySelectorAll<HTMLElement>("template[id^='__child__']");
        for (const child of children) {
            const comp = Component.children[child.id];
            if (comp) {
                const htmlStr: string = await comp.render();
                const element = this.parseHTML(htmlStr);
                await this.addChildren(element);
                this.addEvent(element);
                child.replaceWith(element);
            }
        }
    }

    private async parse(page: Component): Promise<HTMLElement> {
        const htmlStr: string = await page.render();
        const element = this.parseHTML(htmlStr);
        await this.addChildren(element);
        this.addEvent(element);
        return element;
    }
}