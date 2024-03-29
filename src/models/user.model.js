import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
    profilePic:{
        type:String,   //will upload on cloudinary
    },
    username:{
        type:String,
        required:true,
    },
    userage:{
        type:String
    },
    studyingProfession:{
        type:String
    },
    oneBigAchievement:{
        type:String
    },
    nextGoal:{
        type:String
    }

},{timestamps:true})

export const User = mongoose.model("User", userSchema)