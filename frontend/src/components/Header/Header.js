import css from "./Header.module.css"
import {Link} from "react-router-dom";
import {authService} from "../../services/auth.service";


export default function Header(){

    return(<div>
            <div className={css.link_container}>
                <div className={css.link_block}>
                    <Link className={css.link} to={'/cabinet'}>Cabinet</Link>
                </div>

                <div className={css.link_block}>
                    <Link className={css.link} to={'/activateAcc'}>Activate</Link>
                </div>
                <div className={css.link_block}>
                    <Link className={css.link} to={'/create'}>Create</Link>
                </div>
                <div className={css.link_block}>
                    <Link className={css.link} to={'/'}>Clothes</Link>
                </div>
                <div className={`${css.link_block} ${authService.isAuthenticated() ? css.authenticated : ''}`}>
                {!authService.isAuthenticated() && (<Link className={css.link} to={'/login'}>Login</Link>)}
            </div>
                <div className={`${css.link_block} ${authService.isAuthenticated() ? css.authenticated : ''}`}>
                    {!authService.isAuthenticated() && (<Link className={css.link} to={'/register'}>Register</Link>)}
                </div>
            </div>
    </div>

    )
}