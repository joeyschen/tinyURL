import react, {useState, useEffect} from 'react';
import axios from 'axios';

export const TinyUrl = (props) => {

    const [name, setName] = useState("");
    const [shortLink, setShortLink] = useState("");
    const [origLink, setOrigLink] = useState("");

    let onSubmit = (e) => {
        e.preventDefault();
    
        const {history} = props;
    
        let tinyURL = {
            name: name,
            shortLink: shortLink,
            origLink: origLink
        };

        console.log(tinyURL);
    
        axios.post("http://localhost:4000/api/newURL/", tinyURL).then(result => {
            history.push(`/details/${result.data.id}`);
        }).catch(err => console.log(err));
    }
    
    return(
        <div>
            <h3>Add New Student</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={name}
                        onChange={ e => setName(e.target.value) }
                        />
                </div>
                <div className="form-group">
                    <label>Short Link: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={shortLink}
                        onChange={ e => setShortLink(e.target.value) }
                    />
                </div>
                <div className="form-group">
                    <label>Original Link  </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={origLink}
                        onChange={e => setOrigLink(e.target.value) }
                        />
                </div>
                
                
                <div className="form-group">
                    <input type="submit" value="+Create TinyURL" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )

}