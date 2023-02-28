import express, { Express, Request, Response } from 'express';
import cors from "cors"
import folderRouter from "./routes/folder.route";

//use all middleware
const app:Express = express();
app.use(express.json());
app.use(cors());

app.use('/api/',folderRouter)

export default app;