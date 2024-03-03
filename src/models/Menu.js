import mongoose from 'mongoose'
import { Schema, model } from 'mongoose'

const menuSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
        default: ""
    }
})

export default model('Menu', menuSchema)