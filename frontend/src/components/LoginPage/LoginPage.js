import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {authService} from "../../services/auth.service";
import css from "./Login.module.css"

export default function LoginPage(){
    const {register,handleSubmit} = useForm();
    const [error,setError] = useState(null);
    const navigate = useNavigate();

    const login =async (userCredential)=> {
        try {
            await authService.login(userCredential);
            navigate('/clothes')
        }catch (e) {
            if(e.response.status ===   401){
                setError(e.response.data)
            }
        }
    };

    return(
        <div className={css.login}>
            <div className={css.login_container}>
                <form onSubmit={handleSubmit(login)}>
                    <input type="text" placeholder={'email'} {...register('email')}/>
                    <input type="password" placeholder={'password'} {...register('password')}/>
                    <button>login</button>
                </form>
                <div className={css.forgot_button}>
                    <button onClick={()=> navigate('/forgotPassword')}>Forgot Password</button>
                </div>
            </div>
            {error?.detail &&
                <div>
                    {error.detail}
                </div>
            }
        </div>
    )

}