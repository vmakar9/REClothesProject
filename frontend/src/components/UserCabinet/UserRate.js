import css from "./UserRate.module.css"
export default function UserRate({ownRate}){

    return(<div className={css.rate_block}>
        <div>
        <h3>{ownRate.title}</h3>
        <h3 className={css.rating}>{ownRate.rating}</h3>
        <p>{ownRate.content}</p>
        </div>
    </div>)
}