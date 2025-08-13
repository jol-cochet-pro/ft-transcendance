import React from "../../react/react";
import type Component from "../component";

export default class LandingPage implements Component
{
    public caca() {
        React.navigate("/landing");
    }

    public render(): string {
        return `
            <div>
                <h1> Coucou </h1>
                <button onClick="caca"> Here </button>
            </div>
        `;
    }
}