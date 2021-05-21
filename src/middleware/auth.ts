import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken'
import authConfig from '../config/authConfig'

interface Token{
    id: string,
    iat: number,
    exp: number
}

export const authMiddleare = async (req: Request, res: Response, next: NextFunction)=>{
    const { authorization } = req.headers
    

    if(!authorization){
        return res.sendStatus(401).json({message: 'token requerido'})
    }


    const token = authorization.replace('Bearer', '').trim()


    try{
        const data = jwt.verify(token, authConfig.secret)
        

        const {id} = data as Token

        req.user_id = id
        
        return next()

    } catch{
         return res.sendStatus(401).send({message: 'nao existe token'})  
    }
}