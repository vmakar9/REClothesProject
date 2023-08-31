import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/UsersSlice";
import UserInfo from "./UserInfo";
import {authService} from "../../services/auth.service";
import UserRating from "./UserRating";
import ExitCabinet from "./ExitCabinet";
import css from "./UserInfo.module.css"
import {useNavigate} from "react-router-dom";


export default function UserCabinet(){

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const _id = authService.getIdByToken(); // Припускаючи, що accessToken містить _id

    const { userInfo } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(userActions.getOwnInfo({_id}));
    }, [dispatch, _id]);

    return(<div>
        {userInfo?.map(userInfos =>  <UserInfo key={userInfos._id} userInfos={userInfos}/>)}
        <div>
        <button onClick={() =>  navigate("/changePassword")} className={css.changePassword}>ChangePassword</button>
        </div>
        <ExitCabinet/>
        <UserRating/>
    </div>)

}