import { addNewURL, getAllURLs, getURLById, updateURL, deleteURL, getRedirectURL } from '../controllers/tinyURLAPIController';

const routes = (app) => {
    //Routes for main site CRUD operations
    app.route('/api/newURL')
    //get endpoints
        .get(getAllURLs)
    //post endpoint
        .post(addNewURL);
        

    app.route('/api/newURL/:id')
        .get(getURLById)
        .put(updateURL)
        .delete(deleteURL);

    app.route('/tiny/:id')
        .get(getRedirectURL);
    
}

export default routes;