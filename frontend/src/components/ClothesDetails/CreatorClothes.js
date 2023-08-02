import {photoURL} from "../../urls/urls";
import {useNavigate} from "react-router-dom";
export default function CreatorClothes({clothCreator}){

    const navigate = useNavigate();

    return(<div onClick={()=>  navigate('userDetails',{state:{...clothCreator}})}>
        <img alt={"User avatar"} src={`${photoURL}/${clothCreator.avatar}`}/>
        <h3>{clothCreator.name}</h3> <h3>{clothCreator.surname}</h3>
    </div>)
}