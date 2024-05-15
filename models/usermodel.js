import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs';
import  JWT from 'jsonwebtoken';

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: ['true, name is required']
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: ['true, email is required'],
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: ['true, password is required'],
        minlength: 6
    },
    location:{
        type: String,
        default: 'india'
    }
}, {timestamps: true})

userschema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt);
})

userschema.methods.comparePassword = async function(userpassword){
    const ismatch = await bcrypt.compare(userpassword, this.password);
    return ismatch
}

userschema.methods.createJWT = function() {
    return JWT.sign({userId: this._id}, process.env.JWT_SECRET, {
        expiresIn: "1d",
    })
}

export default mongoose.model('User', userschema)