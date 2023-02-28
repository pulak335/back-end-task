import mongoose from 'mongoose';
import { Folder } from '../types/folder';

export const FolderModel = mongoose.model<Folder>('Folder', new mongoose.Schema<Folder>({
    name: { 
        type: String, 
        required: true 
    },
    parentFolder: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Folder', 
        default: null 
    },
    children: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Folder', default: [] 
    }],
  }));