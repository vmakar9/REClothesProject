import {useNavigate} from "react-router-dom";
import {authService} from "../../services/auth.service";
import css from "./UserInfo.module.css"
import {useState} from "react";

export default function ExitCabinet(){
    const navigate = useNavigate();
    const [error,setError] = useState(null)

    const exit= async ()=> {
        try {
            await authService.deleteTokens();
            navigate('/login')
        }catch (e) {
            if(e.response.data ===   401){
                setError(e.response.data)
            }
        }

    }

    return(<div>
        <button className={css.exit_button} onClick={()=> exit()}>Exit</button>
        {error?.detail &&
            <div>
                {error.detail}
            </div>
        }
    </div>)
}