import css from "./UsersClothes.module.css"
import {photoURL} from "../../urls/urls";

export default function UsersClothes({userCloth}){

    return<div className={css.container}>
            <div className={css.product}>
                <h3 className={css.title}>{userCloth.title}</h3>
                <p className={css.size}>{`${userCloth.size}`}</p>
                <p className={css.people}>{userCloth.people}</p>
                <p className={css.season}>{`${userCloth.season}`}</p>
                <p className={css.type}>{userCloth.type}</p>
                <p className={css.materials}>{`${userCloth.materials}`}</p>
                <p className={css.avilability}>{userCloth.availability}</p>
                <img alt={"Clothes photo"} src={`${photoURL}/${userCloth.photos[0]}`} className={css.photos}/>
                <p className={css.description}>{userCloth.description}</p>
                <h3 className={css.price}>{userCloth.price}</h3>
            </div>
    </div>
}