import React from 'react';
import model from "../images/model.jpeg";

import "../styles/about.css";

function About() {
    return (
        <div>
            <section className="about">
                <div className="about-text">
                    <h1>About Me</h1>
                    <h2> Full-Stack Software Engineer</h2>
                    <p>ewfhgewkjfgewkfewhjfgewfhgewkjbdwkjdbewhjgwejhfgwjkehewhjgejhwgdehwghweghejwghjwegj
                        bhwegfhewjgfehwjgfewhgfewhgfhjewgvfewhjgfewhjfbewbfhjekw
                        hhwegfhwekfgewhfgewkfgewjfewjkfewkjfbewkfewhjfjefejwhvfejwhfhjewfjh
                    </p>
                    <button> More Details</button>
                </div>
                <div className="about-model">
                    <img src={model} alt="model" />
                </div>
            </section>
            
        </div>
    )
}

export default About
