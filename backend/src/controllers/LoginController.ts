import { Request, Response } from "express"
import { loginService } from '../services/LoginService'

export const loginController = async (request: Request, response: Response) => {
    const { nome, senha } = request.body

    try {
        let fieldErrors = []
        if (!senha) {
            fieldErrors.push('Senha')
        }
        if (Object.keys(fieldErrors).length > 0) {
            return response.status(400).json({message: `Há campos inválidos em sua requisição. (${fieldErrors.join(', ')})`})
        }
        
        const userData = await loginService(nome, senha)
        return response.status(userData.status).json(userData);
    } catch (e) { 
        console.error(e)
        response.status(500).json({ message: 'Serviço indisponível.'})
    }
}