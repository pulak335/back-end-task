import express, { Express, Router } from "express";
import { VerifyToken } from "../middleware/verifyToken";

const router:Router = express.Router()

router.route('/user/slot')
    .post(VerifyToken,)
    .get(VerifyToken,)
    .patch(VerifyToken,)

router.route('/user/slot/:id')
    .get(VerifyToken,)
    .patch(VerifyToken,)


export default router;