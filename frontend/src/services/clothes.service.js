import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const clothesService= {
    getAll:(page=1) => axiosService.get(urls.clothes,{params:{page}}),
    getById:(_id)=> axiosService.get(`${urls.clothes}/${_id}`)
}


export {clothesService}
