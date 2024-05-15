import mongoose from "mongoose";
import status from "statuses";

const jobschema = new mongoose.Schema({
    company:{
        type: String,
        required: [true, 'company is required']
    },
    position:{
        type: String,
        required: [true, 'position is required']
    },
    status:{
        type: String,
        enum: ['pending','interview','reject']
    },
    worktype:{
        type: String,
        enum: ['on-site','remote','hybrid','full-time'],
        default: 'full-time'
    },
    worklocation:{
        type: String,
        default:'Zurich',
        required: [true, 'work location is required']
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'user is required']
    }
})
export default mongoose.model('Job', jobschema)