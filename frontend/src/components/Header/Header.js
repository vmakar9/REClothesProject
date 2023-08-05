import css from "./Header.module.css"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faToggleOff, faToggleOn} from "@fortawesome/free-solid-svg-icons";
import {themeActions} from "../../redux/slices/ThemeSlice";
export default function Header(){

    const [theme,setTheme]= useState(false)

    const dispatch = useDispatch()



    return(<div className={css.Header}>

        {!theme ? (<FontAwesomeIcon
                icon={faToggleOff}
                className={css.header_theme}
                onClick={() => {
                    setTheme(true)
                    dispatch(themeActions.setLightTheme())
                }
                }/>)
            : (<FontAwesomeIcon
                icon={faToggleOn} className={css.header_theme}
                onClick={() => {
                    setTheme(false)
                    dispatch(themeActions.setDarkTheme())
                }}
            />)}


    </div>)
}