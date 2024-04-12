import mongoose, { Schema } from 'mongoose';

const car = new Schema({
    make: String,
    model: String,
    p_year: String,
    price: String,
    color: String,
    email:String,
    s_name: String,
    s_num: String,
    s_add: String,
    s_city: String,
   
});

export const CarDetails = mongoose.model('CarDetail', car);