import express, { Express, Request, Response } from 'express';
import cors from "cors"
import userRouter from './routes/user.routes'
import blogRouter from './routes/blog.routes'
import serviceRouter from './routes/service.routes'
import slotRouter from './routes/slot.routes'
import settingsRouter from './routes/settings.routes'
import feedbackRouter from './routes/feedback.routes'
import appointmentRouter from './routes/appointment.routes'
import aboutRouter from './routes/about.routes'

//use all middleware
const app:Express = express();
app.use(express.json());
app.use(cors());

app.use('/api',userRouter)
// app.use('/api',aboutRouter)
// app.use('/api',appointmentRouter)
// app.use('/api',feedbackRouter)
// app.use('/api',settingsRouter)
// app.use('/api',slotRouter)
// app.use('/api',serviceRouter)
// app.use('/api',blogRouter)


export default app;