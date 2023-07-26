import {Router} from "express";
import {authMiddleware} from "../middleware/auth.middleware";
import {clothesMiddleware} from "../middleware/clothes.middleware";
import {accessMiddleware} from "../middleware/access.middleware";
import {commentsMiddleware} from "../middleware/comments.middleware";
import {fileMiddleware} from "../middleware/file.middleware";
import {clothesController} from "../controller/clothes.controller";
import {commentsController} from "../controller/comments.controller";

const router = Router();

router.get("/",
    clothesController.getAll)

router.post("/",
    authMiddleware.checkAccessToken,
    accessMiddleware.getUserStatus,
    clothesController.create)

router.get("/:clothesId",
    clothesMiddleware.getIdOrThrow,
    clothesController.getClothesById)

router.put("/:clothesId",
    authMiddleware.checkAccessToken,
    clothesMiddleware.getIdOrThrow,
    accessMiddleware.getUserStatus,
    accessMiddleware.getClothesAccess,
    clothesController.update)

router.delete("/:clothesId",
    authMiddleware.checkAccessToken,
    clothesMiddleware.getIdOrThrow,
    accessMiddleware.getUserStatus,
    accessMiddleware.getClothesAccess,
    clothesController.delete)

router.put("/photos/:clothesId",
    authMiddleware.checkAccessToken,
    clothesMiddleware.getIdOrThrow,
    accessMiddleware.getUserStatus,
    accessMiddleware.getClothesAccess,
    fileMiddleware.isClothesPhotoValid,
    clothesController.uploadPhotos)

router.delete("/photos/:clothesId/:index",
    authMiddleware.checkAccessToken,
    clothesMiddleware.getIdOrThrow,
    accessMiddleware.getUserStatus,
    accessMiddleware.getClothesAccess,
    clothesController.deletePhoto)

router.post("/:clothesId/comments",
    authMiddleware.checkAccessToken,
    accessMiddleware.getUserStatus,
    clothesMiddleware.getIdOrThrow,
    commentsController.create)

router.put("/comments/:commentsId",
    authMiddleware.checkAccessToken,
    accessMiddleware.getUserStatus,
    accessMiddleware.getCommentsAccess,
    commentsMiddleware.gedIdOrThrow,
    commentsController.update)

router.delete("/comments/:commentsId",
    authMiddleware.checkAccessToken,
    accessMiddleware.getUserStatus,
    accessMiddleware.getCommentsAccess,
    commentsMiddleware.gedIdOrThrow,
    commentsController.delete)

router.get("/:clothesId/comments",
    authMiddleware.checkAccessToken,
    clothesMiddleware.getIdOrThrow,
    accessMiddleware.getUserStatus,
    commentsController.getById)

router.put("/comments/photos/:commentsId",
    authMiddleware.checkAccessToken,
    accessMiddleware.getUserStatus,
    accessMiddleware.getCommentsAccess,
    commentsMiddleware.gedIdOrThrow,
    fileMiddleware.isCommentsPhotoValid,
    commentsController.uploadPhotos)

router.delete("/comments/photos/:commentsId/:index",
    authMiddleware.checkAccessToken,
    accessMiddleware.getUserStatus,
    accessMiddleware.getCommentsAccess,
    commentsMiddleware.gedIdOrThrow,
    commentsController.deletePhotos)




export const clothesRouter = router;
