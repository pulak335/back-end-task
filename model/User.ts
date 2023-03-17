import mongoose from 'mongoose';
import { User } from '../types/user';
import bcrypt from 'bcryptjs';

export const userSchema  = new mongoose.Schema<User>({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    roleOfUser: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})



userSchema.pre('save', function(next){
    const password = this.password;

    const hashPassword = bcrypt.hashSync(password)
    
    this.password = hashPassword;
    next();
})

export const Users = mongoose.model('Users', userSchema)