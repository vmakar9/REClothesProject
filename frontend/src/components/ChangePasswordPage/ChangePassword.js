import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {authService} from "../../services/auth.service";
import {passwordService} from "../../services/password.service";
import css from "./ChangePassword.module.css"


export default function ChangePassword(){
    const {register,handleSubmit} = useForm()

    const navigate = useNavigate();



    const changePassword = async (data)=> {
         const _id = authService.getIdByToken()
        await passwordService.changePassword(_id,data.oldPassword,data.newPassword)
        await authService.deleteTokens();
        navigate("/login")
    }

    return(<div className={css.change_form}>
        <div className={css.change}>
            <form onSubmit={handleSubmit(changePassword)}>
                <input type="password" placeholder={'oldPassword'} {...register('oldPassword')}/>
                <input type="password" placeholder={'newPassword'} {...register('newPassword')}/>
                <button>Change Password</button>
            </form>
        </div>
    </div>)
}