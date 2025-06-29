import { Request, Response, NextFunction } from 'express';
interface CustomRequest extends Request {
    cookies: { [key: string]: string };
}
const jwt = require('jsonwebtoken')
const auth = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (!token)
        return res.status(401).json({ message: 'you need login' });
    

}