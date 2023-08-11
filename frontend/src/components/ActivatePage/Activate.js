import {useEffect, useState} from "react";
import {activateService} from "../../services/activate.service";
import {useLocation, useParams} from "react-router-dom";


const Activate =()=> {
    const [activationStatus,setActivationStatus] = useState('')
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const token = searchParams.get('token')

    useEffect(()=> {
        activateService.activate(token)
            .then(response=>  {
                setActivationStatus('Account is activated')
            })
            .catch(error=>  {
                setActivationStatus('Error activation')
            })
    },[])

    return(
        <div>
            <h3>{activationStatus}</h3>
        </div>
    )

}

export {Activate}