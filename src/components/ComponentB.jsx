import React, { Component } from 'react'
import ComponentC from "./ComponentC";

export default class ComponentA extends Component {
    render() {
        return (
            <div>
                <h1>B</h1>
                <ComponentC />
            </div>
        )
    }
}
