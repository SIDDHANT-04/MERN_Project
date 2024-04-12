import mongoose, { Schema } from 'mongoose';

const login = new Schema({
    username:String,
    email:String,
    pwd:String,
});

export const LoginDetails = mongoose.model('LoginDetail', login);