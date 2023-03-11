import { NumberInput } from "@mantine/core";
import mongoose from "mongoose";
import { connectToDatabase } from "../lib/utils/mongoose";

/** @type {import('mongoose').Connection} */
let roomDB = await connectToDatabase();

const roomSchema=new mongoose.Schema({
    userId:{
        type:Number,
        default:1
    },
    email:{
        type:String,
        required:true
    },
    roomType:{
        type:String,
        required:true,
    },
    roomNumber:{
        type:Number,
        required:true,
    },
    startTime:{
        type:String,
        required:true,
    },
    endTime:{
        type:String,
        required:true,
    },
    booked:{
        type:Boolean,
        default:false,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
})

export default mongoose.models.room || roomDB.model('room',roomSchema,'room');