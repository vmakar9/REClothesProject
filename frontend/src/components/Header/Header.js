import css from "./Header.module.css"
import {Link} from "react-router-dom";

export default function Header(){

    return(<div className={css.Header}>
            <div>
                <Link to={'/login'}>Login</Link>
            </div>
    </div>

    )
}