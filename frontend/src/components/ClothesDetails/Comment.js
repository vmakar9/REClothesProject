import css from "./ClothesDetails.module.css";
import {photoURL} from "../../urls/urls";

export default function Comment({commentar}){

    const photos = commentar?.photos.map((photo,index)=> (
        <img key={index} src={`${photoURL}/${photo}`} alt={"Comment photos"}/>
    ))

    return(<div className={css.comment}>
        <h3>{commentar.title}</h3>
        <p>{commentar.description}</p>
        <div className={css.commentphotos}>{photos}</div>
    </div>)
}