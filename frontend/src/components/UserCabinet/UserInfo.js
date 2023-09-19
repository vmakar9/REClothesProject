import {photoURL} from "../../urls/urls";
import css from "./UserInfo.module.css"
import {useNavigate} from "react-router-dom";

export default function UserInfo({userInfos}){

    const navigate = useNavigate();

    return<div className={css.user_block}>
        <div className={css.user}>
        <h3> Name : {userInfos.name}</h3>
        <h3> Surname : {userInfos.surname}</h3>
            <div>
        <img className={css.user_avatar} alt={`Avatar of ${userInfos.name}`} src={`${photoURL}/${userInfos.avatar}`}/>
                <button onClick={() => navigate(`/avatar/${userInfos._id}`)} className={css.buttons}>Avatar</button>
            </div>
        <h3> Email : {userInfos.email}</h3>
        <h3> Status : {userInfos.status}</h3>
        <h3> Role : {userInfos.role}</h3>
        </div>
    </div>
}