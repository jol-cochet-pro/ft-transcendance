
export default interface Component {
    render(): string;
    [key: string]: any; // autorise n’importe quelle clé string
}