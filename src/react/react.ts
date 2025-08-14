import type Component from './component'
import Navigator from './navigator'

export default class React {
    private static navigator = new Navigator()

    static init(initData : { routes: Record<string, new () => Component> }) {
        this.navigator.routes = initData.routes;
        window.addEventListener('popstate', () => {
            React.navigator.navigate(location.pathname, false)
        })

        window.addEventListener('DOMContentLoaded', () => {
            React.navigator.navigate(location.pathname)
        })
    }

    static navigate(path: string) {
        React.navigator.navigate(path)
    }
}
