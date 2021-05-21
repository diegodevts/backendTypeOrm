import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Adresses } from "../models/entity/Adresses";



//encontrar todos os endereços c usuario
export const getAdresses = async (req: Request, res: Response) => {
    const repository  = getRepository(Adresses)
    const adresses = await repository.find()

    await repository.save(adresses)

    return res.json(adresses)
}

//encontrar um endereço so
export const getAdress = async (req: Request, res: Response) => {

    const { id } = req.params
    const repository = getRepository(Adresses)
    const adress = await repository.findOne(id)

    return res.json(adress)
}

//salvar 
export const saveAdresses = async (req: Request, res: Response) => {
    const repository = getRepository(Adresses)
    const adress = repository.create(req.body)

    await repository.save(adress)
    res.json(adress)
}

//atualizar endereçço
export const updateAdress = async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = getRepository(Adresses)
    const adress = await repository.update(id, req.body)


    if (adress.affected == 1) {
        const adressUpdated = await repository.findOne(id)
        return res.json({message:"endereço atualizado"})
    }


    return res.status(404).json({ message: 'Adress not found!' })

}


//atualizar um campo especifico
export const estadoAdress = async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = getRepository(Adresses)
    const adress = await repository.update(id, {
        estado: "São Paulo"
    })

    if (adress.affected == 1) {
        const adressUpdated = await repository.findOne(id)
        return res.json({message: 'campo atualizado'})
    }

    return res.status(404).json({ message: 'Adress not found!' })
}

//deletar endereço
export const removeAdress = async (req: Request, res: Response) => {
    const { id } = req.params
    const repository = getRepository(Adresses)
    const adress = await repository.delete(id)

    if (adress.affected == 1) {
        const adressUpdated = await repository.findOne(id)
        return res.json({ message: 'excluido parceiro' })
    }

    return res.status(404).json({ message: 'User not found!' })
}
