import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import Cloth from "./Cloth";
import {clothesActions} from "../../redux/slices/ClothesSlice";




export default function Clothes(){


    const dispatch = useDispatch()

    const {clothes} = useSelector(state => state.clothes)

    useEffect(()=> {
        dispatch(clothesActions.getAll())
    },[dispatch])




    return(<div>
        {clothes.data?.map(cloth=> <Cloth key={cloth._id} cloth={cloth}/>)}
    </div>)
}
