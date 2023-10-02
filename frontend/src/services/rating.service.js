
import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";
import {apiService} from "./api.service";

const ratingService={
    getRating:()=> axiosService.get(`${urls.rating}/getAll`),
    getOwnRating:(_id)=> apiService.get(`${urls.rating}/getOwnRating`),
    postRating:(rate,userId)=> apiService.post(`${urls.rating}/${userId}`,{rate,userId})
}

export {ratingService}