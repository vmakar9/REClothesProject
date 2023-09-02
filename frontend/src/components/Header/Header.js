import css from "./Header.module.css"
import {Link} from "react-router-dom";
import {authService} from "../../services/auth.service";


export default function Header(){

    return (
        <div>
            <div className={css.link_container}>
                {authService.isAuthenticated() && (
                    <div className={css.link_block}>
                        <Link className={css.link} to={'/cabinet'}>Cabinet</Link>
                    </div>
                )}

                {!authService.isAuthenticated() && (
                    <div className={css.link_block}>
                        <Link className={css.link} to={'/login'}>Login</Link>
                    </div>
                )}

                {!authService.isAuthenticated() && (
                    <div className={css.link_block}>
                        <Link className={css.link} to={'/register'}>Register</Link>
                    </div>
                )}

                    <div className={css.link_block}>
                        <Link className={css.link} to={'/'}>Clothes</Link>
                    </div>
            </div>
        </div>
    );
}