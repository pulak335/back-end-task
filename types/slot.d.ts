import {Document} from "mongoose";

export interface Slot {
    date: string;
    startTime: string;
    endTime: string;
    slotNumber: string;
}