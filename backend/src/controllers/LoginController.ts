import { Request, Response } from "express"
import LoginService from '../services/LoginService'
export default class LoginController {
    public loginService: LoginService

    constructor() {
        this.loginService = new LoginService()
    }

    public async login(request: Request, response: Response) {
        const { name, password } = request.body

        try {
            let fieldErrors = []
            if (!password) {
                fieldErrors.push('Senha')
            }
            if (Object.keys(fieldErrors).length > 0) {
                return response.status(400).json({message: `Há campos inválidos em sua requisição. (${fieldErrors.join(', ')})`})
            }
            
            const userData = await this.loginService.login(name, password)
            return response.status(userData.status).json(userData);
        } catch (e) { 
            console.error(e)
            response.status(500).json({ message: 'Serviço indisponível.'})
        }
    }
}