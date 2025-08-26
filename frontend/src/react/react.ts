import type Component from './component'
import Navigator from './navigator'

export default class React {

    static init(initData: { routes: Record<string, new () => Component> }) {
        Navigator.instance.routes = initData.routes
        window.addEventListener('popstate', () => {
            Navigator.instance.navigate(location.pathname, false)
        })

        window.addEventListener('DOMContentLoaded', () => {
            Navigator.instance.navigate(location.pathname)
        })
    }

    static navigate(path: string) {
        Navigator.instance.navigate(path)
    }
}
