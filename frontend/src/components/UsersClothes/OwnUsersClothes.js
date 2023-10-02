import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {clothesActions} from "../../redux/slices/ClothesSlice";
import OwnClothes from "./OwnClothes";
import {useLocation} from "react-router-dom";

export default function OwnUsersClothes(){
    const {allClothes} = useSelector(state => state.clothes)
    const dispatch = useDispatch()

    const {state} = useLocation()
    const {_id} = state

    useEffect(()=>{
        dispatch(clothesActions.getAll())
    },[dispatch])

    const ownedClothes = allClothes?.filter(cloth=> _id.includes(cloth.creator))


    return(<div>
        {ownedClothes?.map(clothes=><OwnClothes key={clothes._id} clothes={clothes}/>)}

    </div>)
}