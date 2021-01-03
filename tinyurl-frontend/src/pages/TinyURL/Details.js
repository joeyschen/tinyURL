import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export const Details = (props) => {
    const [tinyURL, setTinyURL] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:4000/api/newURL/${props.param.id}`).then(result => {
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

        <div>
            <p>Name: {tinyURL.name} </p>
            <p>Short Link: {tinyURL.shortLink}</p>
            <p>Original Link: {tinyURL.origLink}</p>
        </div>
    );
}