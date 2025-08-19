export default abstract class Component {
    [key: string]: any // autorise n’importe quelle clé string

    static handlerID = 0
    static handlers: Record<string, () => void> = {}

    abstract render(): string

    register(fn: () => void) {
        const id = `__handler__${Component.handlerID++}`
        Component.handlers[id] = fn
        return id
    }

    public toString(): string {
        return this.render()
    }
}
