export default abstract class Component {
    [key: string]: any // autorise n’importe quelle clé string

    static handlerID = 0
    static handlers: Record<string, (el?: HTMLElement) => void> = {}

    abstract render(): string
    
    register(fn: (el?: HTMLElement) => void) {
        const id = `__handler__${Component.handlerID++}`
        Component.handlers[id] = fn;
        return id
    }

    public toString(): string {
        return this.render()
    }
}
