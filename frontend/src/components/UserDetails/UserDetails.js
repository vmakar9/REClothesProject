import {useLocation} from "react-router-dom";
import {photoURL} from "../../urls/urls";
import css from "./UserDetails.module.css"


export default function UserDetails(){
    const {state} = useLocation();

    const {name,surname,avatar}= state;

    return(<div className={css.usercontainer}>
        <div className={css.user}>
        <img className={css.avatar} src={`${photoURL}/${avatar}`} alt={"User avatar"}/>
        <h3 className={css.username}>{name}</h3> <h3 className={css.surname}>{surname}</h3>
        </div>
    </div>)
}