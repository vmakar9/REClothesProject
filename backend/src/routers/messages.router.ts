import {Router} from "express"
import {authMiddleware} from "../middleware/auth.middleware";
import {accessMiddleware} from "../middleware/access.middleware";
import {messagesController} from "../controller/messages.controller";

const router = Router()

router.get("/recivedmessages",
    authMiddleware.checkAccessToken,
    accessMiddleware.getUserStatus,
    messagesController.get)

router.post("/:recipient",
    authMiddleware.checkAccessToken,
    accessMiddleware.getUserAccess,
    messagesController.sendMessage)

router.get("/sendedmessages",
    authMiddleware.checkAccessToken,
    accessMiddleware.getUserStatus,
    messagesController.sendersMessages)

export const messagesRouter = router;
