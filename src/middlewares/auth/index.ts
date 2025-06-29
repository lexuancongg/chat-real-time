import { Request, Response, NextFunction } from 'express';
export interface CustomRequest extends Request {
    cookies: { [key: string]: string };
    user?: any
}
const jwt = require('jsonwebtoken')
const auth = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (!token)
        return res.status(401).json({ message: 'you need login' });

    try {
        const decode = jwt.verify(token,process.env.SERECT_KEY)
        req.user = decode
        next();
    } catch (error) {
        res.status(401).json("token is valid")
    }

}

export default auth;