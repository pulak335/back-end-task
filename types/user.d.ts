import {Document} from "mongoose";


export interface User {
    fullName: string;
    email: string;
    phone: string;
    dob: string;
    roleOfUser: string;
    address: string;
    password: string;
  }