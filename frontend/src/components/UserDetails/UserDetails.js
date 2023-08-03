import {useLocation} from "react-router-dom";
import {photoURL} from "../../urls/urls";
import css from "./UserDetails.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {clothesActions} from "../../redux/slices/ClothesSlice";
import UsersClothes from "./UsersClothes";


export default function UserDetails(){

    const {state} = useLocation();

    const dispatch =useDispatch();

    const {allClothes} = useSelector(state =>  state.clothes)

    useEffect(()=>  {
        dispatch(clothesActions.getAll())
    },[dispatch])

    const {_id,name,surname,avatar} = state;

    const usersClothes = allClothes?.filter(userClothes =>  _id.includes(userClothes.creator))


    return(<div className={css.usercontainer}>
        <div className={css.user}>
        <img className={css.avatar} src={`${photoURL}/${avatar}`} alt={"User avatar"}/>
        <h3 className={css.username}>{name}</h3> <h3 className={css.surname}>{surname}</h3>
        </div>
        <div>{usersClothes?.map(userClothe =>  <UsersClothes key={userClothe._id} userCloth={userClothe}/>)}</div>
    </div>)
}