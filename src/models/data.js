import mongoose from 'mongoose'
import { Schema, model } from 'mongoose'

const dataSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    participantName: {
        type: String,
        required: true,
        default: ""
    },
    prompt: {
        type: String,
        required: true,
        default: ""
    },
    fontSize: {
        type: Number,
        required: true,
        default: -1
    },
    spaceBetweenMenus: {
        type: Number,
        required: true,
        default: -1
    },
    subsectionsCount : {
        type: Number,
        required: true,
        default: -1
    },
    pathCount: {
        type: Number,
        required: true,
        default: -1
    }, 
    aveTimeSpent: {
        type: Number,
        required: true,
        default: -1
    },
    totalTimeSpent: {
        type: Number,
        required: true,
        default: -1
    },
    rawData: {
        type: String,
        required: true,
        default: ""
    }
})
export default model('Data', dataSchema)