import { getRepository } from "typeorm";
import { NextFunction, request, Request, Response } from "express";
import { Users } from "../models/entity/Users";
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import authConfig from '../config/authConfig'





//listar todos os usuarios
export const getUsers = async (req: Request, res: Response) => {
    const repository = getRepository(Users)
    const users = await repository.find()

    await repository.save(users)
    return res.json(users)
}
/******************************************************************************************************** */

//listar um
export const getUser = async (req: Request, res: Response) => {

    const { id } = req.params
    const repository = getRepository(Users)
    const user = await repository.findOne(id)
    return res.json(user)
}
/******************************************************************************************************** */

//salvar usuario 
export const saveUser = async (req: Request, res: Response) => {

    const repository = getRepository(Users)
    const user = repository.create(req.body)
    const userToken = req.body.id
    await repository.save(user)


    return res.json({ user, token: generateToken({ id: userToken }) })
}
/************************************************************************************************** */

//atualizar usuario
export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = getRepository(Users)
    const user = repository.update(id, req.body)

    if ((await user).affected == 1) {
        const userUpdate = await repository.findOne(id)
        return res.json({ message: 'usuario atualizado' })
    }


    return res.status(404).json({ message: 'User not found!' })
}



/********************************************************************************************** */

//buscar por um parametro de editá-lo
export const idadeUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = getRepository(Users)
    const user = await repository.update(id, {
        idade: 650
    })

    if (user.affected == 1) {
        const userUpdated = await repository.findOne(id)
        return res.json({ message: ' campo atualizado parceiro' })
    }

    return res.status(404).json({ message: 'User not found!' })
}
/***************************************************************************************** */

//deletar usuario
export const removeUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = getRepository(Users)
    const user = await repository.delete(id)

    if (user.affected == 1) {
        const userUpdated = await getRepository(Users).findOne(id)
        return res.json({ message: 'excluido parceiro' })
    }

    return res.status(404).json({ message: 'User not found!' })
}
/*********************************************************************************** */

//verificação pra autenticar
export const verifyUser = async (req: Request, res: Response) => {
    const { email, senha } = req.body

    const repository = getRepository(Users)
    const user = await repository.findOne({where: {email}})
    

    if(!user){
        return res.status(401).send({error: 'email inválido'})
    }



    const isValidPasssword = await bcrypt.compare(senha, user.senha)

    if (!isValidPasssword) {

        return res.status(401).send({ error: 'senha invalida' })

    }

    const token = jwt.sign({ id: user.id }, authConfig.secret, { expiresIn: 86400 })


    
    return res.json({ user, token })

}
/***************************************************************************************************** */

// valida usuario com token
export const verifyToken = async (req: Request, res: Response) =>{
    const user_id = req.user_id


    if (user_id) {
       
        return res.status(404).json({message: 'logado com sucesso', user_id})  

    }

      
    
}


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, { expiresIn: 86400 })
}


