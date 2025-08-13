import type Component from "../component";

export default class NotFoundPage implements Component
{
    public render(): string {
        return `<h1> Erreur 404: Not found </h1>`
    }
} 