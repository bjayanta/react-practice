import React, { Component } from 'react'
import ComponentB from "./ComponentB";

export default class ComponentA extends Component {
    render() {
        return (
            <div>
                <h1>A</h1>
                <ComponentB />
            </div>
        )
    }
}
