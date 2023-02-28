import {Document} from "mongoose";

export interface Folder {
    name: string;
    parentFolder: string | null;
    children: Folder[];
  }