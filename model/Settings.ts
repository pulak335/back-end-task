import { Settings } from '../types/settings.d'
import mongoose from 'mongoose';


export const Setting = mongoose.model<Settings>('Setting', new mongoose.Schema<Settings>({
    logoUrl: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    descrtion: {
        type: String,
        required: true
    },
    metaTag: {
        type: String,
        required: true
    },
    metaDescription: {
        type: String,
        required: true
    },
}))