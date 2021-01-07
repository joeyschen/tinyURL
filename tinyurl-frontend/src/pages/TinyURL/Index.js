import {React, useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Table, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const Index = () => {
    const [tinyURL, setTinyURL] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:4000/api/newURL`).then(result => {
          const response = result.data;
          console.log(response);
          setTinyURL(response);
          setLoading(false);
      }).catch(err => {
          setError(true);
          setLoading(false);
      });
    }, []);

    return (
        loading ? <div>Loading...</div> : error ? <div>Error occured.</div> :
        <>
        <Container className="p-3">
            <p>These are the existing TinyURL modules. How does it <Link to="/tiny-url/about">work?</Link> </p>
            <Button variant="success" className="mb-3" href="/tiny-url/create">Create TinyURL</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Short Link</th>
                        <th>Original Link</th>
                        <th>Clicks</th>
                        <th>Date Created</th>
                    </tr>
                </thead>
                <tbody>
                    {tinyURL.map((tiny, idx) => (
                        <tr key={idx}>
                            <td><Link to={`./tiny-url/details/${tiny.id}`}>{tiny.id}</Link></td>
                            <td>{tiny.name}</td>
                            <td>{tiny.shortLink}</td>
                            <td>{tiny.origLink}</td>
                            <td>{tiny.clicks}</td>
                            <td>{tiny.createDate ? new Date(tiny.createDate).toISOString().slice(0,10) :  '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
        </>
    );
}