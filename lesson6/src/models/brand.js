import mongoose from "mongoose"

const {Schema} = mongoose

const Brand = new Schema({
    
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
}, {timestamps:true, versionKey: false})


export default mongoose.model('brand', Brand)