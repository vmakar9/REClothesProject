import {photoURL} from "../../urls/urls";
export default function CreatorClothes({clothCreator}){

    return(<div>
        <img alt={"User avatar"} src={`${photoURL}/${clothCreator.avatar}`}/>
        <h3>{clothCreator.name}</h3> <h3>{clothCreator.surname}</h3>
    </div>)
}