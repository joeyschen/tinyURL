import mongoose from 'mongoose';
import { tinyURLSchema } from '../models/tinyURL';
import validURL from 'valid-url';
import cache, { clearKey } from '../services/cache';
import { createTinyURL, getTinyURL } from '../services/TinyURLService';


const tinyURL = mongoose.model('tinyURL', tinyURLSchema);

export const getRedirectURL = async (req, res) => {

    try{
        //looks to see if key exists in cache
        let cachedTinyURL = await cache.getFromCache('id', JSON.stringify(req.params.id));
        if(cachedTinyURL){
            console.log("item was cached!");
            return res.redirect(cachedTinyURL.origLink);
        } 
        else{
            console.log("not in cache");
        }
    }
    catch(err){
        console.error('Unable to get urlData from cache');
    }

    //if not in cache, look in db
    await tinyURL.findOne({id: req.params.id}, (err, tinyURL) => {
        if(err){
            return res.send(err);
        }

        if(!tinyURL){
            return res.status(404).json("Did not find tinyURL with that ID");
        }

        getTinyURL(tinyURL)

        return res.redirect(tinyURL.origLink);
    })
    .cache()
    .catch(err => console.log(err));
};

export const addNewURL = async (req, res) => {
    let newTinyURL = new tinyURL(req.body);
    let validTinyUrl;

    //validate shortLink newTinyURL
    if(!validURL.isUri(newTinyURL.shortLink)){
        return res.status(404).json('Invalid shortLink URL format');
    }

    //validate origLink newTinyURL
    if(validURL.isUri(newTinyURL.origLink)){
        validTinyUrl = new tinyURL(await createTinyURL(newTinyURL));
    }
    else{
        return res.status(404).json('Invalid origLink URL format');
    }

    await validTinyUrl.save((err, tinyURL) => {
        if(err){
            res.send(err);
        }
        res.json(tinyURL);
    });
};

export const getAllURLs = async (req, res) => {

    await tinyURL.find({}, (err, tinyURL) => {
        if(err){
            res.send(err);
        }
        res.json(tinyURL);
    });
};

export const getURLById = async (req, res) => {

    await tinyURL.findById(req.params.id, (err, tinyURL) => {
        if(err){
            res.send(err);
        }
        res.json(tinyURL);
    });
};

export const updateURL = async (req, res) => {

    await tinyURL.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, useFindAndModify: false}, (err, tinyURL) => {
        if(err){
            res.send(err);
        }
        res.json(tinyURL);
    });
};

export const deleteURL = async (req, res) => {

    await tinyURL.deleteOne({_id: req.params.id}, (err, tinyURL) => {
        if(err){
            res.send(err);
        }
        res.json({message: `Successfully deleted url: ${req.params.id}`});
    });
};