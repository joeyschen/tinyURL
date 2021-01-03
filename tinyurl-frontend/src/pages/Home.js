import React from 'react';
import {Link} from 'react-router-dom';

export const Home= () => (
    <>
    <h1>Hello, Welcome to Joey's Website</h1>
    <p>I'll be featuring personal projects that I'm currently working on in the MERN stack.</p>

    <p>Done are the following:</p>
    <ul>
        <li><Link to ="/tiny-url">Tiny URL</Link></li>
    </ul>
    
    </>
);