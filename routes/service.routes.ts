import express, { Express, Router } from "express";
import { VerifyToken } from "../middleware/verifyToken";

const router:Router = express.Router()

router.route('/service')
    .post(VerifyToken,)
    .get(VerifyToken,)

router.route('/service')
    .delete(VerifyToken,)
    .get(VerifyToken,)
    .patch(VerifyToken,)

export default router;