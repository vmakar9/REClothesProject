import {createBrowserHistory} from "history";
import axios from "axios";
import {baseURL} from "../urls/urls";
import {authService} from "./auth.service";

const apiService = axios.create({baseURL})

const history =  createBrowserHistory();

apiService.interceptors.request.use((config) => {
    if (authService.isAuthenticated()) {
        const access = authService.getAccessToken();
        config.headers.Authorization = `${access}`
    }
    return config
})

let isRefreshing = false
apiService.interceptors.response.use((config) => {
        return config
    },
    async (error) => {
        const refresh = authService.getRefreshToken();

        if (error.response?.status === 401 && refresh && !isRefreshing){
            isRefreshing = true

            try {
                await authService.refresh(refresh);
            }catch (e) {
                authService.deleteTokens()
                history.replace('/login?expSession=true')
            }
            isRefreshing = false;
            return apiService(error.config)
        }
        return Promise.reject(error)
    }
)

export {
    apiService,history
}