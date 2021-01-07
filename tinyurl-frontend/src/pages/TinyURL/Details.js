import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';

export const Details = ({match}) => {
    const [tinyURL, setTinyURL] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        // const {match: {params}} = this.props;
        
        axios.get(`/api/newURL/${match.params.id}`).then(result => {
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
            <div>
                <p>Name: {tinyURL.name} </p>
                <p>Short Link: {tinyURL.shortLink}</p>
                <p>Original Link: {tinyURL.origLink}</p>
            </div>
        </Container>
        </>
    );
}