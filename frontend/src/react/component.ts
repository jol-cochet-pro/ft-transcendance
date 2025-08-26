import HTMLRenderer from "./renderer";

export default abstract class Component<T = any> {
    private _state: T | undefined = undefined;
    static handlerID = 0;
    static childID = 0;

    static handlers: Record<string, (el?: HTMLElement) => void> = {};
    static children: Record<string, Component> = {};

    private _id: number = -1;

    public set id(id: number) {
        this._id = id;
    }

    public get id() {
        return this._id;
    }

    public get state() {
        return this._state;
    }

    public setState(setter: (prev: T | undefined) => T) {
        const tmp = setter(this._state);
        if (tmp === this._state) return ;
        this._state = setter(this._state);
        HTMLRenderer.instance.refresh(this);
    }

    public componentDidMount(): void { }

    protected abstract render(): string

    public completeRender() {
        this.componentDidMount();
        return this.render();
    }

    protected func(fn: (el?: HTMLElement) => void) {
        const id = `__handler__${Component.handlerID++}`
        Component.handlers[id] = fn;
        return id
    }

    protected child(child: Component) {
        this._id = Component.childID;
        const id = `__child__${Component.childID++}`;
        Component.children[id] = child;
        return `<template id="${id}"> </template>`;
    }

    public toString(): string {
        return this.child(this);
    }
}
