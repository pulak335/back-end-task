import express, { Express, Router } from "express";
import { VerifyToken } from "../middleware/verifyToken";

const router:Router = express.Router()

router.route('/about')
    .post(VerifyToken,)
    .get(VerifyToken,)

router.route('/about/:id')
    .post(VerifyToken,)
    .get(VerifyToken,)

export default router;