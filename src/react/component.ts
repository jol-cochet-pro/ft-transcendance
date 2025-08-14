export default abstract class Component {
    abstract render(): string
    [key: string]: any // autorise n’importe quelle clé string

    static handlerID = 0
    static handlers: Record<string, () => void> = {}

    register(fn: () => void) {
        const id = `__handler__${Component.handlerID++}`
        Component.handlers[id] = fn
        return id
    }

    public toString(): string {
        return this.render()
    }
}
