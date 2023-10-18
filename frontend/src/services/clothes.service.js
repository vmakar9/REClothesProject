import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";
import {apiService} from "./api.service";

const clothesService= {
    getWithThePagination:(page=1) => axiosService.get(urls.clothes,{params:{page}}),
    getAll:()=> axiosService.get(`${urls.clothes}/getAll`),
    create:(data)=> apiService.post(urls.clothes,data),
    update:(id,data)=>apiService.patch(`${urls.clothes}/${id}`,data),
    delete:(id)=> apiService.delete(`${urls.clothes}/${id}`),
    getById:(id)=> apiService.get(`${urls.clothes}/${id}`)
}


export {clothesService}
