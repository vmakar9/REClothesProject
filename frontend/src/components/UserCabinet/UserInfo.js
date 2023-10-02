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
        <div className={css.block_buttons}>
        <div>
            <button onClick={() =>  navigate("/changePassword")} className={css.buttons}>ChangePassword</button>
        </div>
        <div>
            <button onClick={() =>  navigate("/activateAcc")} className={css.buttons}>Activate</button>
        </div>
        <div>
            <button onClick={() =>  navigate("/create")} className={css.buttons}>Create</button>
        </div>
        <div>
            <button onClick={() =>  navigate("/updateOwnInfo")} className={css.buttons}>Update info</button>
        </div>
            <div>
                <button onClick={() =>  navigate(`/yourClothes`,{state:{...userInfos}})} className={css.buttons}>Your clothes</button>
            </div>
        </div>
    </div>
}