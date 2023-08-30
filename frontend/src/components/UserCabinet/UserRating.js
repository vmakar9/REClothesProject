import {useDispatch, useSelector} from "react-redux";
import {authService} from "../../services/auth.service";
import {useEffect} from "react";
import {ratingActions} from "../../redux/slices/RatingSlice";
import UserRate from "./UserRate";

export default function UserRating(){
    const dispatch = useDispatch()

    const {ownRating} = useSelector(state => state.ratings)

    const _id = authService.getIdByToken();

    useEffect(()=> {
        dispatch(ratingActions.getOwnRatings({_id}))
    },[dispatch,_id])


    return(<div>
        {ownRating?.map(ownRate=>  (<UserRate key={ownRate._id} ownRate={ownRate}/>))}
    </div>)
}