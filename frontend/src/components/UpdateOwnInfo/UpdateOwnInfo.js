import {authService} from "../../services/auth.service";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {usersService} from "../../services/users.service";
import css from "./UpdateOwnInfo.module.css"
import {useState} from "react";

export default function UpdateOwnInfo(){
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [error,setError] = useState(null)

    const handleUpdateUser = async (data) => {
        try {
            const _id = authService.getIdByToken();
            const { name, surname, email } = data;

            // Перевіряємо, чи є значення введеними користувачем
            const updateData = {};
            if (name) updateData.name = name;
            if (surname) updateData.surname = surname;
            if (email) updateData.email = email;

            if (Object.keys(updateData).length === 0) {
                // Якщо користувач не ввів нові дані, то нічого не оновлюємо
                navigate('/cabinet');
                return;
            }

            await usersService.updateOwnInfo(_id, updateData.name, updateData.email, updateData.surname);
            navigate('/cabinet');
        } catch (e) {
            if(e.response.data ===   401){
                setError(e.response.data)
            }
        }
    }

    return (
        <div className={css.update_block}>
            <div className={css.update}>
                <form onSubmit={handleSubmit(handleUpdateUser)}>
                    <input type="text" placeholder="name" {...register('name')} />
                    <input type="text" placeholder="surname" {...register('surname')} />
                    <input type="text" placeholder="email" {...register('email')} />
                    <button>Change</button>
                </form>
            </div>
            {error?.detail &&
                <div>
                    {error.detail}
                </div>
            }
        </div>

    );
}