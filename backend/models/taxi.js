// const mongoose = require('mongoose')
import mongoose from "mongoose";
// const Schema= mongoose.Schema

const v_reservationSchema=mongoose.Schema({
    vehicleType:{
        type:String,
        required:true
    },

    from:{
        type:String,
        required:true
    },

    to:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true
    },

    fname:{
        type:String,
        required:true
    },

    lname:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    
    phone:{
        type:Number,
        required:true
    }
})

export default mongoose.model ("taxireserve",v_reservationSchema);