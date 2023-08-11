import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {registerService} from "../../services/register.service";
import css from "./Register.module.css"

export default function RegisterPage(){
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const [error,setError] = useState(null)

    const registerUser = async (user)=> {
        try {
            await registerService.register(user)
            navigate('/login')
        }catch (e) {
           if(e.response.data ===   401){
               setError(e.response.data)
           }
        }
    }
    return(<div>
        <div className={css.register_container}>
            <form onSubmit={handleSubmit(registerUser)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'surname'} {...register('surname')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Register</button>
            </form>
        </div>
        {error?.detail &&
            <div>
                {error.detail}
            </div>
        }
    </div>)
}