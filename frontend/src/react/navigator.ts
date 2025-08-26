import type Component from './component'
import NotFoundPage from '../pages/error/not-found'
import HTMLRenderer from './renderer'

export default class Navigator {
    private static _instance: Navigator | null; 
    private _routes: Record<string, new () => Component> = {}

    private constructor() {}

    public static get instance() {
        if (!Navigator._instance) {
            Navigator._instance = new Navigator();
        }
        return Navigator._instance;
    }

    navigate(path: string, addHistory: boolean = true) {
        const page: Component = new (this._routes[path] || NotFoundPage)()
        if (addHistory) history.pushState(null, '', path)
        HTMLRenderer.instance.render(page)
    }

    set routes(newRoutes: Record<string, new () => Component>) {
        this._routes = newRoutes
    }
}
