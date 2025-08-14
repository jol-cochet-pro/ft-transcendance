import Component from './component'

export default class HTMLRenderer {
    public render(page: Component) {
        const app = document.querySelector('#app')
        app!.innerHTML = ''
        const html = this.parse(page)
        app!.appendChild(html)
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
        for (const clickable of body.querySelectorAll('[onclick]')) {
            const id = clickable.getAttribute('onclick')
            if (id && Component.handlers[id]) {
                clickable.removeAttribute('onclick')
                clickable.addEventListener('click', Component.handlers[id])
            }
        }
        return element
    }
}
