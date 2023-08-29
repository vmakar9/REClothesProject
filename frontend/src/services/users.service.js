import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";
import {apiService} from "./api.service";


const usersService={
    getAll:()=>  axiosService.get(urls.users),
    getOwnInfo:(_id)=>  apiService.get(urls.ownInfo,_id)
}

export {usersService}
