import {Router} from "express";
import  {userInfo}  from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"

const userRouter = Router();

userRouter.route('/userInfo').post(userInfo);

export default userRouter;

