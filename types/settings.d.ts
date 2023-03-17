import {Document} from "mongoose";

export interface Settings {
    logoUrl: string;
    address: string;
    phone: string;
    email: string;
    descrtion: string;
    metaTag: string;
    metaDescription: string;
}