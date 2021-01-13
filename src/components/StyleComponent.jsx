import React, { Component } from "react";

import CustomStyle from "./CustomStyle.module.css";
import "./SassStyle.scss";

class StyleComponent extends Component {

    objStyle = {
        "textAlign": "justify",
        "fontSize": "16px"
    }

    render () {
        return (
            <div className="container">
                <article style={ {"backgroundColor": "black", "color": "#f2f2f2", "padding": "15px"} }>
                    <h1>This is header</h1>

                    <small className={ CustomStyle.auth }>
                        <strong>13 January, 2021 12:30:00 PM</strong> | <strong><em>Jayanta</em></strong>, <strong><em>MaxSOP</em></strong>
                    </small>

                    <p style={ this.objStyle }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nesciunt, distinctio quas incidunt architecto reprehenderit asperiores debitis dolore, repellendus iste earum neque nostrum, vel unde sed exercitationem quae expedita tenetur.</p>

                    <p style={ this.objStyle }>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dolores exercitationem eum quisquam deleniti pariatur, consectetur itaque nemo, impedit quae cumque temporibus accusantium, architecto assumenda soluta fuga! At vitae voluptatem perferendis iusto odio. Culpa, fuga deserunt! Voluptas saepe dignissimos distinctio quis libero aliquid eius odio, veniam at iste debitis quibusdam neque iure voluptatum ea ipsum culpa impedit omnis? Maxime culpa iure voluptates optio fugit qui. Autem eum, velit doloremque commodi sapiente amet veritatis libero magni repellat hic aliquam aut saepe rerum tenetur nihil earum officiis labore quae voluptates sed sit inventore qui similique vitae. Dolor, asperiores voluptatum! Rerum, unde, earum nobis optio maiores dolor reprehenderit velit quibusdam libero cumque in ea? Dolorum commodi architecto eius, enim quia sint quis dignissimos sequi incidunt cum tenetur quibusdam exercitationem nam distinctio assumenda pariatur necessitatibus, neque temporibus ipsam ut vel alias. Magnam officiis delectus quaerat nemo, nesciunt doloribus esse dicta ex voluptas consequatur corporis.</p>

                    <p style={ this.objStyle }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nesciunt, distinctio quas incidunt architecto reprehenderit asperiores debitis dolore, repellendus iste earum neque nostrum, vel unde sed exercitationem quae expedita tenetur.</p>

                    <div>
                        <button className="btn btn-primary">Read more ...</button>
                    </div>
                </article>

                <div className="tags-area">
                    <strong>Tags</strong>

                    <div className="tags">
                        <span>HTML</span>
                        <span>Javascript</span>
                        <span>CSS</span>
                        <span>SASS</span>
                        <span>React</span>
                        <span>Angular</span>
                        <span>Vue</span>
                        <span>jQuery</span>
                        <span>AXAZ</span>
                        <span>PHP</span>
                        <span>XML</span>
                        <span>Python</span>
                        <span>Node JS</span>
                    </div>
                </div>
            </div>
        );
    }

}

export default StyleComponent;