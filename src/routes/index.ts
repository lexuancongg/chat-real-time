import { Application } from "express";
const authRouter = require('./auth')

const route  = (app : Application) : void =>{
    app.use("/auth",authRouter)
    
    
}