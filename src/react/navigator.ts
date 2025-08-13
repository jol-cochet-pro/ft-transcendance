import type Component from "../pages/component";
import NotFoundPage from "../pages/error/not-found";
import LandingPage from "../pages/landing/page";
import HTMLRenderer from "./renderer";

type ComponentConstructor = new () => Component;

export default class Navigator {
    renderer: HTMLRenderer = new HTMLRenderer()
    routes: Map<string, ComponentConstructor> = new Map([
        ["/", LandingPage],
    ]);

    navigate(path: string, addHistory: boolean = true) {
        const page: Component = new (this.routes.get(path) || NotFoundPage);
        if (addHistory)
            history.pushState(null, "", path);
        this.renderer.render(page);
    }   
}