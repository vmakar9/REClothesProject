import {useLocation} from "react-router-dom";
import css from "./ClothesDetails.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/UsersSlice";
import {photoURL} from "../../urls/urls";
import CreatorClothes from "./CreatorClothes";
import {commentsActions} from "../../redux/slices/CommentsSlice";
import Comment from "./Comment";
import Sizes from "../Clothes/Sizes";
import Season from "./Season";



export default function ClothesDetails(){

    const location = useLocation()

    const dispatch = useDispatch()

    const {user} = useSelector(state =>  state.user)

    const {comments} = useSelector(state => state.comments)

    useEffect(()=>  {
        dispatch(userActions.getUser())
    },[dispatch])

    useEffect(()=> {
        dispatch(commentsActions.getAllComments())
    },[dispatch])


    const {state} = location;

    const {_id,title, description,size,price,season,people,type,photos,materials,availability,creator} = state;

    const clothesCreator = user?.filter(clotheCreator => creator.includes(clotheCreator._id));

    const comment = comments?.filter(commentar =>  _id.includes(commentar.commented_clothes))


    const allPhotos = photos.map((photo,index)=>  (
        <img key ={index} src={`${photoURL}/${photo}`} alt={`Photo ${index +1}`}/>
    ));


    return(
        <div className={css.container}>
       <div className={css.creator}>{clothesCreator?.map(clothCreator =>  <CreatorClothes key={clothCreator._id} clothCreator={clothCreator}/>)}</div>
        <div className={css.product}>
            <h3 className={css.title}>{title}</h3>
            <div className={css.size}>{size.map((sizes,index)=>  (<Sizes key={index} name={sizes.name}/>))}</div>
            <p className={css.people}>{people}</p>
            <p className={css.season}>{season.map((seasons,index)=>  (<Season key={index} name={seasons.name}/>))}</p>
            <p className={css.type}>{type}</p>
            <p className={css.materials}>{`${materials}`}</p>
            <p className={css.avilability}>{availability}</p>
            <div className={css.photos}>{allPhotos}</div>
            <p className={css.description}>{description}</p>
            <h3 className={css.price}>{price}</h3>
        </div>
            <div>
                {comment?.map(commentar =>  <Comment key={commentar._id} commentar={commentar}/>)}
           </div>
    </div>)
}
