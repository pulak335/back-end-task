import express, { Express, Request, Response, IRouter } from 'express';
import { createFolder, deleteFolder, getAllFolder } from '../controller/folder.controller'

const router:IRouter = express.Router()

router.route('/folders')
    .post(createFolder)
    .get(getAllFolder)

router.route('/folders/:id')
    .delete(deleteFolder)

export default router;