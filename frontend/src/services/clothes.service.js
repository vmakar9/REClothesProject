import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const clothesService= {
    getWithThePagination:(page=1) => axiosService.get(urls.clothes,{params:{page}}),
    getAll:()=> axiosService.get(`${urls.clothes}/getAll`),
}


export {clothesService}
