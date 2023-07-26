import {useLocation} from "react-router-dom";
import css from "./ClothesDetails.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/UsersSlice";
import {photoURL} from "../../urls/urls";


export default function ClothesDetails(){

    const location = useLocation()

    const dispatch = useDispatch()

    const {user} = useSelector(state =>  state.user)

    useEffect(()=>  {
        dispatch(userActions.getUser())
    },[dispatch])


    const {state} = location;

    const {title, description,size,price,season,people,type,photos,materials,availability} = state;

    const clothesCreator = state?.state?.filter(clothCreator =>  clothCreator._id ===   user._id )

    console.log(clothesCreator)

    const allPhotos = photos.map((photo,index)=>  (
        <img key ={index} src={`${photoURL}/${photo}`} alt={`Photo ${index +1}`}/>
    ));


    return(<div className={css.container}>
        <div className={css.product}>
            <h3 className={css.title}>{title}</h3>
            <p className={css.size}>{`${size}`}</p>
            <p className={css.people}>{people}</p>
            <p className={css.season}>{`${season}`}</p>
            <p className={css.type}>{type}</p>
            <p className={css.materials}>{`${materials}`}</p>
            <p className={css.avilability}>{availability}</p>
            <div className={css.photos}>{allPhotos}</div>
            <p className={css.description}>{description}</p>
            <h3 className={css.price}>{price}</h3>
        </div>
        <div>
            {JSON.stringify(clothesCreator)}
        </div>
    </div>)
}
