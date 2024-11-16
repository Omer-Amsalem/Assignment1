import mongoose from "mongoose";

const postScheme = mongoose.Schema({
    message:{
        type:String,
        required: true
    },
    
    sender: {
        type:String,
        required: true
    }
})

export default mongoose.model("Post", postScheme);



