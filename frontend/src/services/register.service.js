import {apiService} from "./api.service";
import {urls} from "../urls/urls";

const registerService={
    register:(user)=> apiService.post(urls.register,user)
}

export {registerService}