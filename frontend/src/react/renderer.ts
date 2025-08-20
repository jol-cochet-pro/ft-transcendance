import Component from './component'
import { createIcons, icons } from "lucide";

export default class HTMLRenderer {
    public render(page: Component) {
        const app = document.querySelector('#app')
        app!.innerHTML = ''
        const html = this.parse(page)
        app!.appendChild(html)

        createIcons({ icons });
    }

    private parse(page: Component): ChildNode {
        const htmlStr: string = page.render()
        const parser = new DOMParser()
        const html = parser.parseFromString(htmlStr, 'text/html')
        const body = html.body
        const element = body.firstChild
        if (!element) {
            throw new Error('Error in template')
        }
        for (const clickable of body.querySelectorAll<HTMLElement>('[onclick]')) {
            const id = clickable.getAttribute('onclick')
            if (id && Component.handlers[id]) {
                clickable.removeAttribute('onclick')
                clickable.addEventListener('click', () => Component.handlers[id](clickable))
            }
        }
        for (const loadable of body.querySelectorAll<HTMLElement>('canvas[onload]')) {
            const id = loadable.getAttribute('onload')
            if (id && Component.handlers[id]) {
                loadable.removeAttribute('onload');
                Component.handlers[id](loadable);
            }
        }
        return element
    }
}
