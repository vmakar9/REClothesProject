import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";
import {apiService} from "./api.service";


const usersService={
    getAll:()=>  axiosService.get(urls.users),
    getOwnInfo:(_id)=>  apiService.get(urls.ownInfo,_id),
    updateOwnInfo:(_id,name,email,surname)=> apiService.patch(urls.updateOwnInfo,{_id,name,email,surname}),
    putAvatar:(avatar,_id)=> apiService.put(`${urls.users}/${_id}/avatar`,{avatar,_id}),
    deleteAvatar:(_id)=> apiService.delete(`${urls.users}/${_id}/avatar`,_id)
}

export {usersService}
