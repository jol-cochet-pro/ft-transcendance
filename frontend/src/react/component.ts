export default abstract class Component {

    static handlerID = 0;
    static handlers: Record<string, (el?: HTMLElement) => void> = {};

    static childID = 0;
    static children: Record<string, Component> = {};

    abstract render(): string
    
    func(fn: (el?: HTMLElement) => void) {
        const id = `__handler__${Component.handlerID++}`
        Component.handlers[id] = fn;
        return id
    }

    child(child: Component) {
        const id = `__child__${Component.childID++}`;
        Component.children[id] = child;
        return `<template id="${id}"> </template>`;
    }

    public toString(): string {
        return this.child(this);
    }
}
