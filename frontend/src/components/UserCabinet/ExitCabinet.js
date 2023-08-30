import {useNavigate} from "react-router-dom";
import {authService} from "../../services/auth.service";
import css from "./UserInfo.module.css"

export default function ExitCabinet(){
    const navigate = useNavigate();

    const exit= async ()=> {
            await authService.deleteTokens();
            navigate('/login')
    }

    return(<div>
        <button className={css.exit_button} onClick={()=> exit()}>Exit</button>
    </div>)
}