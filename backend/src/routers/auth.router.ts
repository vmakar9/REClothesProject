import {Router} from "express";
import {userMiddleware} from "../middleware/user.middleware";
import {authMiddleware} from "../middleware/auth.middleware";
import {EActionTokenType} from "../enum/action-token-type";
import {authController} from "../controller/auth.controller";


const router = Router();

router.post('/login',
    userMiddleware.getDynamicallyOrThrow("email"),
    authController.login)

router.post('/register',
    userMiddleware.getDynamicallyAndThrow("email"),
    authController.register)

router.post('/refresh',
    authMiddleware.checkRefreshToken,
    authController.refresh)

router.post('/password/change',
    authMiddleware.checkAccessToken,
    userMiddleware.getDynamicallyAndThrow("email"),
    authMiddleware.checkOldPassword,
    authController.changePassword)

router.post('/password/forgot',
    userMiddleware.getDynamicallyOrThrow("email"),
    authController.forgotPassword)

router.put('/password/forgot/:token',
    authMiddleware.checkActionToken(EActionTokenType.forgot),
    authController.setForgotPassword)

router.post('/activate',
    userMiddleware.getDynamicallyOrThrow("email"),
    authController.sendActivateToken)

router.put('/activate/:token',
    authMiddleware.checkActionToken(EActionTokenType.activate),
    authController.activate)




export const authRouter = router
