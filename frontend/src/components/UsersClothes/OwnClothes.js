import css from "./OwnClothes.module.css"
import {photoURL} from "../../urls/urls";

export default function OwnClothes({clothes}){
        const allPhotos = clothes.photos.map((photo,index)=>  (
            <img key ={index} src={`${photoURL}/${photo}`} alt={`Photo ${index +1}`}/>
        ));
    return(<div className={css.clothes_block}>
            <div className={css.clothes}>
            <h3 className={css.title}>{clothes.title}</h3>
            <p className={css.size}>{`${clothes.size}`}</p>
            <p className={css.people}>{clothes.people}</p>
            <p className={css.season}>{`${clothes.season}`}</p>
            <p className={css.type}>{clothes.type}</p>
            <p className={css.materials}>{`${clothes.materials}`}</p>
            <p className={css.availability}>{clothes.availability}</p>
                    <div className={css.photos}>{allPhotos}</div>
            <p className={css.description}>{clothes.description}</p>
            <h3 className={css.price}>{clothes.price}</h3>
            </div>
    </div>)
}