import mongoose from "mongoose";

const {Schema} = mongoose

const User = new Schema({
    id: {
        type: Number
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        default: "Member"
    }
}, {timestamps:true, versionKey: false})

export default mongoose.model("user", User)