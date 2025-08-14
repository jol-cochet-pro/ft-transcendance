import type Component from './component'
import NotFoundPage from '../pages/error/not-found'
import HTMLRenderer from './renderer'


export default class Navigator {
    private _renderer: HTMLRenderer = new HTMLRenderer()
    private _routes: Record<string, new () => Component> = {};

    navigate(path: string, addHistory: boolean = true) {
        const page: Component = new (this._routes[path] || NotFoundPage)()
        if (addHistory) history.pushState(null, '', path)
        this._renderer.render(page)
    }

    set routes(newRoutes: Record<string, new () => Component>) {
        this._routes = newRoutes
    }
}
