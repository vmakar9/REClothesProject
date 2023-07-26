import {NextFunction, Request, Response} from "express";
import {IClothes} from "../types/clothes.types";
import {clothesService} from "../services/clothes.service";
import {ICommonResponse} from "../types/common.types";
import {ITokenPayload} from "../types/token.types";
import {Clothes} from "../models/Clothes.model";
import {UploadedFile} from "express-fileupload";
import {IQuery} from "../types/pagination.types";


class ClothesController{

    public async getAll(req:Request,res:Response,next:NextFunction):Promise<Response<IClothes[]>>{
        try {
            const clothes = await clothesService.getWithPagination(
                req.query as IQuery
            )
            return res.json(clothes);
        }catch (e) {
            next(e)
        }
    }


    public async create(req:Request,res:Response,next:NextFunction):Promise<Response<ICommonResponse<IClothes>>>{
        try {
            const { _id } = req.res.locals.jwtPayload as ITokenPayload;
            const clothes = await clothesService.create(req.body,_id);
            return res.status(201).json(clothes);
        }catch (e) {
            next(e);
        }
    }

    public async update(req:Request,res:Response,next:NextFunction):Promise<Response<IClothes>>{
        try {
            const { clothesId } = req.params;

            const updatedClothes = await Clothes.findByIdAndUpdate(clothesId, { ...req.body }, { new: true });

            return res.status(201).json(updatedClothes);
        }catch (e) {
            next(e);
        }

    }

    public async delete(req:Request,res:Response,next:NextFunction):Promise<Response<void>>{
        try {
            const { clothesId } = req.params;
            await Clothes.deleteOne({_id:clothesId});
            return res.sendStatus(204)
        }catch (e) {
            next(e);
        }
    }

    public async getClothesById(req:Request,res:Response,next:NextFunction):Promise<Response<IClothes>>{
        try {
            const {clothesId} = req.params;
            const clothes = await clothesService.getClothesById(clothesId);
            return res.json(clothes);
        }catch (e) {
            next(e)
        }
    }

    public async uploadPhotos(req:Request,res:Response,next:NextFunction):Promise<Response<IClothes>>{
        try {
            const clothesEntity = res.locals.clothes as IClothes;
            const photos = req.files.photos as UploadedFile;
            const clothes = await clothesService.uploadPhotos(photos,clothesEntity);

            return res.status(201).json(clothes)
        }catch (e) {
            next(e)
        }
    }

    public async deletePhoto(req:Request,res:Response,next:NextFunction):Promise<Response<IClothes>>{
        try {
            const clothesEntity = res.locals.clothes as IClothes;
            const photoIndex = Number(req.params.index);

            const updatedClothes = await clothesService.deletePhoto(clothesEntity,photoIndex)

            return res.status(204).json(updatedClothes);
        }catch (e) {
            next(e)
        }

    }

}
export const clothesController  = new ClothesController();
