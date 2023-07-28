import {IComments} from "../types/comments.types";
import {Comments} from "../models/Comments.model";
import {Types} from "mongoose";
import {ApiError} from "../error/api.error";
import {UploadedFile} from "express-fileupload";
import {s3Service} from "./s3.service";
import {IUser} from "../types/user.types";



class CommentsService{
    public async create(data:IComments,commentatorId:string,commented_clothesId:string){
        try {
            await Comments.create({...data,commentator:new Types.ObjectId(commentatorId),commented_clothes:commented_clothesId})
        }catch (e) {
            throw new ApiError(e.message,e.status);
        }
    }


    public async update(commentId:string,updatedData:IComments){
        try {
            await Comments.findByIdAndUpdate(commentId,updatedData);
        }catch (e) {
            throw new ApiError(e.message,e.status)
        }
    }

    public async delete(commentId:string){
        try {
            await Comments.findByIdAndDelete(commentId)
        }catch (e) {
            throw new ApiError(e.message,e.status)
        }
    }

    public async uploadCommentPhotos(file:UploadedFile,comments:IComments):Promise<IComments>{
        try {
            const filePath = await s3Service.uploadCommentsPhotos(file,'comments',comments._id)

            const currentPhotos = comments.photos || [];
            const newPhotos = [...currentPhotos,filePath]

            return await Comments.findByIdAndUpdate(
                comments._id,
                {photos:newPhotos},
                {new:true}
            )
        }catch (e) {
            throw new ApiError(e.message,e.status)
        }
    }

    public async deletePhotos(comments:IComments,photoIndex:number):Promise<IComments>{
        try{
            const currentPhotos = comments.photos || [];

            if(photoIndex<0 || photoIndex >=  currentPhotos.length){
                throw new ApiError("Invalid photo index",422)
            }
            const photoPathtoDelete = currentPhotos[photoIndex];

            await s3Service.deletePhoto(photoPathtoDelete);

            currentPhotos.splice(photoIndex,1);

            return await Comments.findByIdAndUpdate(
                comments._id,
                {photos:currentPhotos},
                {new:true}
            )
        }catch (e) {
            throw new ApiError(e.message,e.status)
        }
    }


    public async getAllComments():Promise<IUser[]>{
        try {
            return Comments.find();
        }catch (e) {
            throw new ApiError(e.message,e.status)
        }
    }
}

export const commentsService = new CommentsService();
