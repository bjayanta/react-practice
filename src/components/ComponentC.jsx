import React, { Component } from 'react'
import { DataConsumer } from "./context/DataContext";

export default class ComponentA extends Component {
    render() {
        return (
            <div>
                <h1>C</h1>
                <DataConsumer>
                    { username => {
                        return <h2>User: { username }</h2>
                    }}
                </DataConsumer>
            </div>
        )
    }
}
