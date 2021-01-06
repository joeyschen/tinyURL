import react from 'react';
import {Container, Button} from 'react-bootstrap';

export const About = () => {
    return (
        <>
            <Container>
                <h1 className="title">Tiny URL</h1>
                <p>This is how it works:</p>
                <div><img src="../../img/tinyurl/url-shortener.png" /></div>

                <Button href="/" variant="primary" type="button">Back</Button>
            </Container>
        </>
    );
}