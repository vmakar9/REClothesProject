import css from "./Cloth.module.css"
import {useNavigate} from "react-router-dom";
import {photoURL} from "../../urls/urls";
import Sizes from "./Sizes";



export default function Cloth({cloth}){


    const navigate = useNavigate()

    return(<div className={css.clotheslist}>
        <div onClick={()=>  navigate(`${cloth._id}`,{state:{...cloth}})} className={css.clothes}>
            <h3 className={css.clothestitle}>{cloth.title}</h3>
            <img className={css.clothesimage} alt={"clothes image"} src={`${photoURL}/${cloth.photos[0]}`}/>
            <div className={css.clothessize}>{cloth.size.map((sizes,index)=>  (<Sizes key={index} name={sizes.name}/>))}</div>
            <h3 className={css.clothesprice}>{cloth.price}</h3>
        </div>
    </div>)
}