import {NextFunction, Request, Response} from "express";
import {User} from "../models/User.model";
import {ApiError} from "../error/api.error";
import {IUser} from "../types/user.types";
import {ITokenPayload} from "../types/token.types";

class UserMiddleware{
    public getDynamicallyAndThrow(
        fieldName: string,
        from: "body" | "query" | "params" = "body",
        dbField: keyof IUser = "email"
    ) {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                const fieldValue = req[from][fieldName];

                const user = await User.findOne({ [dbField]: fieldValue });

                if (user) {
                    throw new ApiError(
                        `User with ${fieldName} ${fieldValue} already exist`,
                        409
                    );
                }

                next();
            } catch (e) {
                next(e);
            }
        };
    }
    public getDynamicallyOrThrow(
        fieldName: string,
        from: "body" | "query" | "params" = "body",
        dbField: keyof IUser = "email"
    ) {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                const fieldValue = req[from][fieldName];

                const user = await User.findOne({ [dbField]: fieldValue });

                if (!user) {
                    throw new ApiError(`User not found`, 422);
                }

                req.res.locals = { user };

                next();
            } catch (e) {
                next(e);
            }
        };
    }
    public async getByIdOrThrow(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const { userId } = req.params;

            const user = await User.findById(userId);

            if (!user) {
                throw new ApiError("User not found", 422);
            }

            res.locals.user = user;
            next();
        } catch (e) {
            next(e);
        }
    }

    public async getByIdAccess(req:Request,res:Response,next:NextFunction):Promise<void>{
        try {
            const {_id} = req.res.locals.jwtPayload as ITokenPayload;
            const user = await User.find({_id:_id})
            if(!user){
                throw new ApiError("Info is undefinded",404)
            }
            res.locals.user = user;
            next()
        }catch (e) {
            next(e)
        }
    }
}

export const userMiddleware = new UserMiddleware()
