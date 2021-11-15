import { Request, Response } from "express";
import LoginService from "../services/LoginService";

export default class LoginController {
  public async login(request: Request, response: Response) {
    const { name, password } = request.body;
    try {
      const loginService = new LoginService();
      const userData = await loginService.login(name, password);
      return response.status(userData.status).json(userData);
    } catch (e) {
      console.error(e);
      response.status(500).json({ message: "Serviço indisponível." });
    }
  }
}
