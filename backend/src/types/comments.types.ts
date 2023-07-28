import {IUser} from "./user.types";
import {Types} from "mongoose";
import {IClothes} from "./clothes.types";


export interface IComments{
    _id?:Types.ObjectId;
    title:string;
    description:string;
    photos:string[];
    commentator:IUser | Types.ObjectId;
    commented_clothes:IClothes | Types.ObjectId;
}