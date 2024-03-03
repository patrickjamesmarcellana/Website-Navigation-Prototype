import mongoose from 'mongoose'
import { Schema, model } from 'mongoose'

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: ""
    },
    subMenus: {
        type: [Schema.Types.ObjectId],
        ref: "Menu"
    },
    parentMenuId: {
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
    dateAdded: {
        type: Date,
        default: Date.now
    }
})
export default model('Menu', menuSchema)