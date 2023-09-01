import {apiService} from "./api.service";
import {urls} from "../urls/urls";

export const passwordService={
    changePassword:(_id,oldPassword,newPassword)=> apiService.post(urls.changePassword,{
        _id,
        oldPassword,
        newPassword}),
    forgotPassword:(email)=> apiService.post(urls.forgotPassword,email),
    setNewPassword:(token,password)=> apiService.put(`${urls.forgotPassword}/${token}`,{password})
}