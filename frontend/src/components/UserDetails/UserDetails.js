import {useLocation} from "react-router-dom";
import {photoURL} from "../../urls/urls";
import css from "./UserDetails.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {clothesActions} from "../../redux/slices/ClothesSlice";
import UsersClothes from "./UsersClothes";
import {ratingActions} from "../../redux/slices/RatingSlice";
import UserRating from "./UserRating";


export default function UserDetails(){

    const {state} = useLocation();

    const dispatch =useDispatch();

    const {allClothes} = useSelector(state =>  state.clothes)

    const {ratings} = useSelector(state=>  state.ratings)

    useEffect(()=>  {
        dispatch(clothesActions.getAll())
    },[dispatch])

    useEffect(()=> {
        dispatch(ratingActions.getRatings())
    },[dispatch])

    const {_id,name,surname,avatar} = state;

    const usersClothes = allClothes?.filter(userClothes =>  _id.includes(userClothes.creator))

    const usersRatings = ratings?.filter(userRating =>  _id.includes(userRating.target))

    console.log(usersRatings)

    return(<div className={css.usercontainer}>
        <div className={css.user}>
        <img className={css.avatar} src={`${photoURL}/${avatar}`} alt={"User avatar"}/>
        <h3 className={css.username}>{name}</h3> <h3 className={css.surname}>{surname}</h3>
        </div>
        <div>{usersClothes?.map(userClothe =>  <UsersClothes key={userClothe._id} userCloth={userClothe}/>)}</div>
        <div>{usersRatings?.map(userRating => <UserRating key ={userRating._id} userRating={userRating}/>)}</div>
    </div>)
}