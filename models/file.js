import mongoose from "mongoose";
//this is made to check the validation of the data which will parsed must in a proper format


const fileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name:{
        type: String, 
        required: true
    },
    downloadContent:{
        type: Number,
        required: true,
        default: 0
    }
})

//this is checking for the collection name file
const File = mongoose.model('file',fileSchema);

export default File;