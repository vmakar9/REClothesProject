const baseURL='http://localhost:5100/'

const photoURL = 'https://clothesshopproject.s3.amazonaws.com';

const auth='auth'

const urls={
    clothes:'clothes',
    users:'users',
    comments:'clothes/comments',
    rating:'users/rating',
    login:`${auth}/login`,
    refresh:`${auth}/refresh`,
    register:`${auth}/register`
}

export {baseURL,urls,photoURL}