import {apiService} from "./api.service";
import {urls} from "../urls/urls";


const activateService={
    activateAcc:(email)=>  apiService.post(urls.activate,email),
    activate:(token)=>  apiService.put(`${urls.activate}/${token}`)
}

export {activateService}