const baseURL='http://localhost:5100/'

const photoURL = 'https://clothesshopproject.s3.amazonaws.com';

const auth='auth'

const users = 'users'

const password = 'password'

const urls={
    clothes:'clothes',
    users:`${users}`,
    comments:'clothes/comments',
    rating:`${users}/rating`,
    login:`${auth}/login`,
    refresh:`${auth}/refresh`,
    register:`${auth}/register`,
    activate:`${auth}/activate`,
    ownInfo:`${users}/get/ownInfo`,
    changePassword:`${auth}/${password}/change`
}

export {baseURL,urls,photoURL}