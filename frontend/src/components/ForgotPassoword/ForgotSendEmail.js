import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {passwordService} from "../../services/password.service";
import css from "./ForgotPassword.module.css"


export default function ForgotSendEmail(){
    const {register,handleSubmit} = useForm()
    const navigate = useNavigate();
    const [error,setError] = useState(null)

    const sendForgotToken = async (email)=> {
     try {
         await passwordService.forgotPassword(email)
         navigate('/forgotPasswordMessage')
     }catch (e) {
         if(e.response.data ===   401){
             setError(e.response.data)
         }
     }
    }

    return(<div className={css.forgot_block}>
        <div className={css.forgot_form}>
            <form onSubmit={handleSubmit(sendForgotToken)}>
                <input type="text" placeholder="email" {...register('email')}/>
                <button>Next</button>
            </form>
        </div>
        {error?.detail &&
            <div>
                {error.detail}
            </div>
        }
    </div>)

}