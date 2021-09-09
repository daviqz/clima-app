import LoginController from "./controllers/LoginController"

const PREFIX = '/api'
export default class Routes {
    public loginController: LoginController

    constructor() {
        this.loginController = new LoginController()
    }

    public get() {
        return [
            {
                path: `${PREFIX}/user/login`, 
                method: 'post', 
                needAuth: false, 
                handler: this.loginController.login
            }
        ]
    }
}