import {useLocation, useNavigate, useParams} from "react-router-dom";
import {photoURL} from "../../urls/urls";
import css from "./YourClothes.module.css"
import {useDispatch} from "react-redux";
import {clothesActions} from "../../redux/slices/ClothesSlice";

export default function YourClothes(){
    const location = useLocation()
    const {state} = location
    const navigate = useNavigate()
   const {clothesId} = useParams()

    const deleteClothes= async ()=>{
        await dispatch(clothesActions.deleteById({clothesId}))
        navigate('/yourClothes')
    }

    const dispatch = useDispatch()

    const allPhotos = state.photos.map((photo,index)=>  (
        <img key ={index} src={`${photoURL}/${photo}`} alt={`Photo ${index +1}`}/>
    ));

    return(<div className={css.block}>
        <div className={css.clothes}>
            <h3 className={css.title}>{state.title}</h3>
            <p className={css.size}>{`${state.size}`}</p>
            <p className={css.people}>{state.people}</p>
            <p className={css.season}>{`${state.season}`}</p>
            <p className={css.color}>{state.color}</p>
            <p className={css.type}>{state.type}</p>
            <p className={css.materials}>{`${state.materials}`}</p>
            <p className={css.country}>{state.country}</p>
            <p className={css.availability}>{state.availability}</p>
            <div className={css.photos}>{allPhotos}</div>
            <p className={css.description}>{state.description}</p>
            <h3 className={css.price}>{state.price}</h3>
            <div className={css.buttons}>
                <button  onClick={deleteClothes}>Delete</button>
                <button  onClick={()=>navigate(`/updateForm/${state._id}`)}>Update</button>
            </div>

        </div>
    </div>)
}