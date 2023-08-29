import {photoURL} from "../../urls/urls";
import css from "./UserInfo.module.css"

export default function UserInfo({userInfos}){
    return<div className={css.user_block}>
        <div className={css.user}>
        <h3> Name : {userInfos.name}</h3>
        <h3> Surname : {userInfos.surname}</h3>
        <img className={css.user_avatar} alt={`Avatar of ${userInfos.name}`} src={`${photoURL}/${userInfos.avatar}`}/>
        <h3> Email : {userInfos.email}</h3>
        <h3> Status : {userInfos.status}</h3>
        <h3> Role : {userInfos.role}</h3>
        </div>
    </div>
}