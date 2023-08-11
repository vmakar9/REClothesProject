import css from "./Header.module.css"
import {Link} from "react-router-dom";

export default function Header(){

    return(<div>
            <div className={css.link_container}>
                <div className={css.link_block}>
                    <Link className={css.link} to={'/login'}>Login</Link>
                </div>
                <div className={css.link_block}>
                <Link className={css.link} to={'/register'}>Register</Link>
                 </div>
                <div className={css.link_block}>
                    <Link className={css.link} to={'/activateAcc'}>Activate</Link>
                </div>
            </div>
    </div>

    )
}