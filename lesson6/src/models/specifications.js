import mongoose from "mongoose";

const {Schema} = mongoose


const attributes = new Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})


const Specifications = new Schema({
    name: {
        type: String,
        required: true
    },
    attributes: {
        type: [attributes],
        required: true
    }
},  {timestamps:true, versionKey: false})

export default mongoose.model('specifications', Specifications)