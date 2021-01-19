import React, { Component } from "react";
import API from "../utils/api";

class Home extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        API.get("posts")
            .then(response => {
                this.setState({posts: response.data});
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        let posts = this.state.posts;

        return (
            <div>
                <h2>JSON Placeholder data</h2>
                <hr/>

                <div>
                    {
                        posts.map((post, index) => {
                            return (
                                <article key={ index }>
                                    <h3>{ post.title }</h3>
                                    <p>{ post.body }</p>
                                </article>
                            )
                        })
                    }
                    
                </div>
            </div>
        );
    }
}

export default Home;