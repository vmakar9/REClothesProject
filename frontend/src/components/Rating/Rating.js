import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {ratingActions} from "../../redux/slices/RatingSlice";
import {authService} from "../../services/auth.service";
import {ratingService} from "../../services/rating.service";

export default function Rating(){
    const {userId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {register,handleSubmit}=useForm();

    const postRating = async (data)=>{
        await dispatch(ratingActions.postRating({data,userId}))
    }


    return(<div>
        <div>
            <form onSubmit={handleSubmit(postRating)}>
                <input type="text" placeholder="title" name={"title"} {...register("title")}/>
                <input type="number" placeholder="rating" name={"rating"}{...register("rating")}/>
                <input type="text" placeholder="content" name={"content"} {...register("content")}/>
                <button type={"submit"}>Create FeedBack</button>
            </form>
        </div>
    </div>)


}