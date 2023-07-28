import {User} from "./User.model";
import {model, Schema, Types} from "mongoose";
import {Clothes} from "./Clothes.model";

const commentsSchema = new Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        photos:{
            type:Array
        },
        commentator: {
            type: Types.ObjectId,
            required: true,
            ref: User,
        },
        commented_clothes:{
            type:Types.ObjectId,
            ref:Clothes
        }
    },{
        versionKey:false,
        timestamps:true
    })

export const Comments = model("comments",commentsSchema)