import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/tinyURLRoutes';
import cors from 'cors';

const app = express();
const PORT = 4000;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/urlDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(res => console.log("Connected to DB"))
.catch(err => console.log(err));

// bodyparser setup
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

//CORS setup
app.use(cors());

routes(app);

app.listen(PORT, () => 
    console.log(`Your server is running on ${PORT}`)
);