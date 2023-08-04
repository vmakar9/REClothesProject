import css from "./Rating.module.css"

export default function UserRating({userRating}){
    return(<div className={css.ratingcontainer}>
        <h3 className={css.title}>{userRating.title}</h3>
        <h3 className={css.rating}>{userRating.rating}</h3>
        <p className={css.content}>{userRating.content}</p>
    </div>)

}