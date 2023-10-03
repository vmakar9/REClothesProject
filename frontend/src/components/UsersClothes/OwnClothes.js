import css from "./OwnClothes.module.css"
import {photoURL} from "../../urls/urls";
import {useNavigate} from "react-router-dom";

export default function OwnClothes({clothes}){

     const navigate = useNavigate()

    return(<div className={css.clothes_block}>
            <div onClick={()=>navigate(`${clothes._id}`,{state:{...clothes}})} className={css.clothes}>
            <h3 className={css.title}>{clothes.title}</h3>
            <img className={css.image} src={`${photoURL}/${clothes.photos[0]}`} alt={"Clothes photo"}/>
            <p className={css.size}>{`${clothes.size}`}</p>
            <h3 className={css.price}> {clothes.price}</h3>
            </div>
    </div>)
}