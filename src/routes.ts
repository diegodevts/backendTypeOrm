import { Router, Request, Response } from 'express'
import { getUsers, saveUser, getUser, updateUser, idadeUser, removeUser, verifyUser, verifyToken} from './controller/UsersController'
import{ estadoAdress, getAdress, getAdresses, removeAdress, saveAdresses, updateAdress } from './controller/AdressesControler'
import {authMiddleare} from './middleware/auth'
const routes = Router()

routes.get('/', (request: Request, response: Response) =>{
    return response.json({message: 'hello world'})
})


//rotas usuario

routes.get('/users', getUsers)
routes.post('/users', saveUser)
routes.post('/session', verifyUser)
routes.get('/session', authMiddleare, verifyToken)
routes.get('/users/:id', getUser)
routes.put('/users/:id', updateUser)
routes.patch('/users/:id', idadeUser)
routes.delete('/users/:id', removeUser)


//rotas endereço

routes.get('/adress', getAdresses)
routes.post('/adress', saveAdresses)
routes.get('/adress/:id', getAdress)
routes.put('/adress/:id', updateAdress)
routes.patch('/adress/:id', estadoAdress)
routes.delete('/adress/:id', removeAdress)


export default routes