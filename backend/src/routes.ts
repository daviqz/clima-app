import { loginController } from "./controllers/LoginController"

const PREFIX = '/api'

const routes = [
    {
        path: `${PREFIX}/user/login`, 
        method: 'post', 
        needAuth: false, 
        handler: loginController
    }
]

export default routes