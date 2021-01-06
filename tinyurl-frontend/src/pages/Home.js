import React from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Container, Button} from 'react-bootstrap';

export const Home = () => (
    <Container className="p-3">
        <Jumbotron>
            <h1>Hello, Welcome to Joey's Website</h1>
            <p>I'll be featuring personal projects that I'm currently working on in the MERN stack.</p>

            <p>Done are the following:</p>
            <>
                <ul>
                    <li><Link to ="/tiny-url">Tiny URL</Link> <Link to="https://github.com/joeyschen/tinyURL"><i className="fab fa-github"></i> </Link></li>
                    <p>
                        Tiny URL takes in a URL and shortens it. This enables the URL to be more accessible on web pages, 
                        allows tracking on things like clicks, and increases usability. 
                        Client: React.js
                        Server: Node.js, Express.js for middleware, Redis for caching
                        Database: MongoDB, Mongoose for ODM
                    </p>
                    
                </ul>
            </>
        </Jumbotron>
    </Container>
);