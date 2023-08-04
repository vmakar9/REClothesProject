
import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const ratingService={
    getRating:()=> axiosService.get(`${urls.rating}/getAll`)
}

export {ratingService}