import {usersService} from "../../services/users.service";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {userActions} from "../../redux/slices/UsersSlice";


export default function Avatar(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams();


    const handleUploadAvatar= async (avatar)=> {
        const formData  = new FormData();
        formData.append('file',avatar.target.files[0])

        dispatch(userActions.putAvatar({formData,id}))
    }

    const handleDeleteAvatar= async ()=> {
        await dispatch(userActions.deleteAvatar({id}))
        await navigate('/cabinet')
    }


    return(<div>
        <div>
               <input type="file" onChange={handleUploadAvatar}/>

        </div>

        <button onClick={handleDeleteAvatar}>Delete avatar</button>
    </div>)

}