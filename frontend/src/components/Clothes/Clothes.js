import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import css from "./Cloth.module.css"
import Cloth from "./Cloth";
import {clothesActions} from "../../redux/slices/ClothesSlice";
import {Outlet, useSearchParams} from "react-router-dom";




export default function Clothes(){
    const dispatch = useDispatch()

    const {clothes,next,prev} = useSelector(state => state.clothes)

    const [query,setQuery]= useSearchParams({page:'1'})

    useEffect(()=> {
        dispatch(clothesActions.getAll({page:query.get('page')}))
    },[dispatch,query])




    return(<div>
        {clothes.data?.map(cloth=> <Cloth key={cloth._id} cloth={cloth}/>)}
        <div className={css.buttom_container}>
            <button className={css.custom_button} disabled={!prev} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>
            <button className={css.custom_button} disabled={!next} onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>next</button>
        </div>
        <Outlet/>
    </div>)
}
