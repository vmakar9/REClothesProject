import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {activateService} from "../../services/activate.service";
import css from "./Activate.module.css"

export default function ActivatePage(){
    const {register,handleSubmit} = useForm()
    const navigate = useNavigate();
    const [error,setError] = useState(null)

    const activateUser= async (email)=> {
        try {
            await activateService.activateAcc(email);
            navigate('/activateMess')
        }catch (e) {
            if(e.response.data ===   401){
                setError(e.response.data)
            }
        }
    }

    return(<div className={css.activate}>
        <div className={css.acform}>
            <p>Please write your email that you used for register</p>
            <form onSubmit={handleSubmit(activateUser)}>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <button>Send Email</button>
            </form>
        </div>
        {error?.detail &&
            <div>
                {error.detail}
            </div>
        }
    </div>)
}