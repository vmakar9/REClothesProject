import {Router} from "express"
import {authMiddleware} from "../middleware/auth.middleware";
import {fileMiddleware} from "../middleware/file.middleware";
import {userMiddleware} from "../middleware/user.middleware";
import {accessMiddleware} from "../middleware/access.middleware";
import {ratingMiddleware} from "../middleware/rating.middleware";
import {userController} from "../controller/user.controller";
import {ratingController} from "../controller/rating.controller";


const router = Router();

router.get("/",
    userController.getAll)


router.get("/:userId",
    userMiddleware.getByIdOrThrow,
    userController.getById)

router.get("/get/ownInfo",
    authMiddleware.checkAccessToken,
    userMiddleware.getByIdAccess,
    userController.getOwnInfo)

router.put("/:userId/avatar",
    authMiddleware.checkAccessToken,
    userMiddleware.getByIdOrThrow,
    accessMiddleware.getUserStatus,
    accessMiddleware.getUserAccess,
    fileMiddleware.isAvatarValid,
    userController.uploadAvatar);

router.delete("/:userId/avatar",
    authMiddleware.checkAccessToken,
    userMiddleware.getByIdOrThrow,
    accessMiddleware.getUserAccess,
    accessMiddleware.getUserStatus,
    userController.deleteAvatar);

router.patch("/:userId",
    authMiddleware.checkAccessToken,
    userMiddleware.getByIdOrThrow,
    accessMiddleware.getUserStatus,
    accessMiddleware.getUserAccess,
    userController.update)

router.post("/:userId/rating",
    authMiddleware.checkAccessToken,
    userMiddleware.getByIdOrThrow,
    accessMiddleware.getUserStatus,
    ratingController.create)

router.get("/:targetId/rating",
    ratingMiddleware.getTargetIdOrThrow,
    ratingController.getRatingUserById)

router.get("/rating/getAll",
    ratingController.getAll)

router.get("/rating",
    authMiddleware.checkAccessToken,
    accessMiddleware.getUserStatus,
    ratingController.getOwnRating)

router.put("/rating/:ratingId",
    authMiddleware.checkAccessToken,
    accessMiddleware.getUserStatus,
    accessMiddleware.getRatingAccess,
    ratingMiddleware.getIdOrThrow,
    ratingController.update)

router.delete("/rating/:ratingId",
    authMiddleware.checkAccessToken,
    accessMiddleware.getUserStatus,
    accessMiddleware.getRatingAccess,
    ratingMiddleware.getIdOrThrow,
    ratingController.delete)



export const userRouter = router;
