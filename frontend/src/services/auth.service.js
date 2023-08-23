import {apiService} from "./api.service";
import {urls} from "../urls/urls";

const accessTokenKey = 'accessToken'
const refreshTokenKey = 'refreshToken'

export const authService={
    login: async function (cred) {
        const response = await apiService.post(urls.login, cred);

        if (response.status === 200) {
            this.setTokens(response.data)
        }

        return response
    },
    refresh: async function (refresh) {
        const response = await apiService.post(urls.refresh, {refresh})

        if (response.status === 200) {
            this.setTokens(response.data)
        }

        return response
    },

    setTokens: ({accessToken, refreshToken}) => {
        localStorage.setItem(accessTokenKey, accessToken)
        localStorage.setItem(refreshTokenKey, refreshToken)
    },
    getAccessToken: () => localStorage.getItem(accessTokenKey),
    getRefreshToken: () => localStorage.getItem(refreshTokenKey),
    deleteTokens: () => {
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    },
    isAuthenticated: () => !!localStorage.getItem(accessTokenKey)


}