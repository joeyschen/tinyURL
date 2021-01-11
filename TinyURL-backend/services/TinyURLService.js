import shortid from 'shortid';
import mongoose from 'mongoose';
import { tinyURLSchema } from '../models/tinyURL';
import os from 'os';
// import cache, { clearKey } from './cache';

const tinyURL = mongoose.model('tinyURL', tinyURLSchema);

export const createTinyURL = async (newTinyURL) =>{
    let urlData;
    // let tinyURL = new tinyURLModel(...newTinyURL);
    console.log(newTinyURL);

    // try{
    //     //looks to see if key exists in cache
    //     urlData = await cache.getFromCache('origLink', JSON.stringify(tinyURL.origLink));
    //     if(urlData) console.log("item was cached!");
    // }
    // catch(err){
    //     console.error('Unable to get urlData from cache');
    // }

    // console.log(urlData);

    //if not, looks in db to see if item exists
    // if(!urlData){
        urlData = await tinyURL.findById(tinyURL.origLink, (err, tinyURL) => {
            if(err){
                res.send(err);
            }
        }).catch(err => console.error(err));
        console.log("not in db");

        if(urlData) return urlData;
    // }

    console.log(urlData);
    
    //if user didn't opt to create unique short link, create one for them
    let shortL = `${os.hostname}/tiny/`;
    let genId = shortid.generate();

    if(newTinyURL.shortLink){
        shortL += newTinyURL.shortLink;
    }
    else{
        shortL += genId;
    }

    urlData = new tinyURL({
        id: newTinyURL.shortLink ? newTinyURL.shortLink : genId,
        shortLink: shortL,
        origLink: newTinyURL.origLink,
        name: newTinyURL.name
    });

    //cache posts
    // cache.addToCache('origLink', JSON.stringify(urlData.origLink), urlData);

    console.log(urlData);
    return urlData;
    
}

export const getTinyURL = async (tinyURLParam) =>{
    let newTinyURL = new tinyURL(tinyURLParam);

    //increment click
    newTinyURL.clicks += 1;
    try{
        newTinyURL.save();
    }
    catch(err){
        console.error("Could not save click: " + err);
    }

    // cache.addToCache('id', JSON.stringify(newTinyURL.id), newTinyURL);
}