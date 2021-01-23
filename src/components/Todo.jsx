import React, { Component } from 'react'

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            currentTask: {
                title: ''
            }
        }
    }

    taskHandle = (e) => {
        this.setState({
            currentTask: {
                title: e.target.value
            }
        });
    }

    addTask = (e) => {
        // stop all events
        e.preventDefault();

        // get all task from state (temp)
        let allTasks = this.state.tasks;
        allTasks.push(this.state.currentTask);

        // store/update
        this.setState({
            tasks: allTasks
        })

        // clear all temp data
        this.setState({
            currentTask: {
                title: ''
            }
        });
    }

    deleteTask = (i) => {
        // get all task from state (temp)
        let allTasks = this.state.tasks;
        allTasks.splice(i, 1);

        // store/update
        this.setState({tasks: allTasks})

        console.log(i);
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.addTask }>
                    <div>
                        <label>Task</label>
                        <input type="text" onChange={ this.taskHandle } value={ this.state.currentTask.title } />
                    </div>

                    <button type="submit">Add</button>
                </form>

                <div>
                    <h3>All Tasks</h3>
                    <ul>
                        {
                            this.state.tasks.map((task, i) => {
                                return <li key={ i }>{ task.title } <button onClick={ this.deleteTask.bind(this, i) }> X </button></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Todo;
