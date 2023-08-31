import {apiService} from "./api.service";
import {urls} from "../urls/urls";

export const passwordService={
    changePassword:(_id,oldPassword,newPassword)=> apiService.post(urls.changePassword,{
        _id,
        oldPassword,
        newPassword})
}