import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;

export const tinyURLSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id:{
        type: String
    },
    shortLink: {
        type: String,
        required: true
    },
    origLink: {
        type: String,
        required: true
    },
    expirTime: {
        type: Date,
        default: Date.now
    },
    clicks: {
        type: Number,
        default: 0
    },
    createDate:{
        type: Date,
        default: Date.now
    }
})