
import mongoose from "mongoose";

const {Schema} = mongoose

const Image = new Schema({
    base_url: {
        type: String,
        required: true
    },
    is_gallery: Boolean,
    lable: String,
    large_url: {
        type: String,
        required: true
    },
    medium_url: {
        type: String,
        required: true
    },
    position: {
        type: String
    },
    small_url: {
        type: String,
        required: true
    },
    thumbnail_url: {
        type: String,
        required: true
    }
})



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

const specifications = new Schema({
    name: {
        type: String,
        required: true
    },
    attributes: {
        type: [attributes],
        required: true
    }
})



const Device = new Schema({
    name:{
        type: String,
        required: true
    },
    price: Number,
    original_price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    images: {
        type: [Image],
        required: true
    },
    brandId: {
        type: Schema.ObjectId,
        ref: "brand"
    },
    specifications: {
        type: [specifications],
        required: true
    }

}, {timestamps:true, versionKey: false})

export default mongoose.model("device", Device)