import express, { RequestHandler }  from "express";
import { registerController, loginController, forgotPasswordController, resetPasswordController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth";

const router = express.Router();


router.post("/register", registerController);
router.post("/login", loginController);
router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password", resetPasswordController);

router.use(authMiddleware); // protect routes


export default router;
