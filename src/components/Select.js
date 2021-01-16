import React, { Component } from "react";

class Select extends Component {

    constructor() {
        super();

        this.state = {
            persons: [
                {name: "Jayanta"},
                {name: "Araf"},
                {name: "Joy"},
                {name: "Sir"},
                {name: "Sagor"},
            ],
            data: ""
        }
    }

    submitHandler = (e) => {
        alert(this.state.data);
        e.preventDefault();
    }

    selectHandler = (e) => {
        this.setState({ data: e.target.value });
        console.log(e.target.value);
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.submitHandler }>
                    <select value={ this.state.data } onChange={ this.selectHandler }>
                        <option value="">None</option>
                        {
                            this.state.persons.map(function(person, index) {
                                return <option value={ person.name } key={ index }>{ person.name }</option>
                            })
                        }
                    </select>

                    <button type="submit">Submit</button>
                </form>
                

                <p>{ this.state.data }</p>
            </div>
        );
    }

}

export default Select;