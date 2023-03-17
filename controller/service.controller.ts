import { Service } from "../model/Feedback"



export const createService= async(req: any, res:any)=>{
    try {
        const service = new Service(req.body)
        
        const result = await service.save()
        res.status(201).json({
            status: 'Success',
            data: result
        })
    } catch (error:any) {
        res.status(400).json({
            status: 'failed',
            data: error.message
        })
    }
}