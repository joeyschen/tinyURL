import react, {useState} from 'react';
import axios from 'axios';
import {Form, Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const Create = (props) => {

    const [name, setName] = useState("");
    const [shortLink, setShortLink] = useState("");
    const [origLink, setOrigLink] = useState("");
    const [newLink, setNewLink] = useState("");

    let onSubmit = (e) => {
        e.preventDefault();
    
        let tinyURL = {
            name: name,
            shortLink: shortLink,
            origLink: origLink
        };

        console.log(tinyURL);
    
        axios.post("http://localhost:4000/api/newURL", tinyURL).then(result => {
            setNewLink(result.data.shortLink);
        }).catch(err => console.log(err));
    }
    
    return(
        <div>
            <Container className="p-3">
            <h3>Add New Student</h3>

            <Form onSubmit = {onSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" 
                        className="form-control" 
                        value={name}
                        onChange={ e => setName(e.target.value) } 
                        placeholder="Enter Name of Your Link..." />
                </Form.Group>

                <Form.Group controlId="formShortLink">
                    <Form.Label>Your Unique ID <span className="text-danger">*Optional</span></Form.Label>
                    <Form.Control type="text" 
                        className="form-control" 
                        value={shortLink}
                        onChange={ e => setShortLink(e.target.value) } 
                        placeholder="Enter Short Link..." />
                    <Form.Text className="text-muted">
                    The format will turn out to be https://www.joeyschen/tiny/XXXXXX
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Original URL</Form.Label>
                    <Form.Control type="text" 
                        className="form-control" 
                        value={origLink}
                        onChange={ e => setOrigLink(e.target.value) } 
                        placeholder="Enter the Original Link..." />
                    <Form.Text className="text-muted">
                    This is the URL that you want to be redirected
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create TinyURL
                </Button>

                <Button variant="secondary" className="m-3" onClick={e => props.history.push("/tiny-url")}>Cancel</Button>
            </Form>

            <div><span className="text-danger">New Link: </span><Link to={newLink}>{newLink}</Link></div>
            </Container>
        </div>
    )

}