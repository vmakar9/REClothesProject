import css from "./SetNewPassword.module.css"
import {useLocation, useNavigate} from "react-router-dom";
import {passwordService} from "../../services/password.service";
import {useForm} from "react-hook-form";

export default function SetNewPassword(){

    const {register,handleSubmit} = useForm();
    const navigate = useNavigate();

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const token = searchParams.get('token')


    const setNewPassword = async (data)=> {
        await passwordService.setNewPassword(token,data.password)
         navigate('/login')
    }

    return(<div className={css.newPassword}>
          <div className={css.newPassword_form}>
              <form onSubmit={handleSubmit(setNewPassword)}>
                  <input type="text" placeholder="new password" {...register('password')}/>
                  <button>Set New Password</button>
              </form>
          </div>
    </div>)
}