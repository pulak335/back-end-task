import express, { Express, Router } from "express";
import { VerifyToken } from "../middleware/verifyToken";

const router:Router = express.Router()

router.route('/appointment')
    .post(VerifyToken,)
    .get(VerifyToken,)

router.route('/appointment')
    .get(VerifyToken,)
    .patch(VerifyToken,)
    .delete(VerifyToken,)

export default router;