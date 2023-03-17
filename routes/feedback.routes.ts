import express, { Express, Router } from "express";
import { VerifyToken } from "../middleware/verifyToken";

const router:Router = express.Router()

router.route('/feedback')
    .post(VerifyToken,)
    .get(VerifyToken,)

router.route('/feedback/:id')
    .patch(VerifyToken,)
    .get(VerifyToken,)
    .delete(VerifyToken)

export default router;