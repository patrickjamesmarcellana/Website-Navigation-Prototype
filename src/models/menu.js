import mongoose from 'mongoose'
import { Schema, model } from 'mongoose'

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: ""
    },
    parentMenu: {
        type: Schema.Types.ObjectId,
        ref: "Menu"
    },
    nestLevel: {
        type: Number,
        default: 0
    },
    isLeaf: {
        type: Boolean,
        default: false
    },
    order: {
        type: Number,   // order within nesting and menu
        default: 0
    }
})
export default model('Menu', menuSchema)