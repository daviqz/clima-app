import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'

import Routes from './Routes'
class Server {
    public express: express.Application
    public routes: Routes

    constructor() {
        this.express = express()
        this.routes = new Routes()
        this.init()
    }

    private samePath(referencePath: string, pathToTest: string): boolean {
        const elementsToTest = pathToTest.split('/')

        const isSamePath = 
            (referencePath === pathToTest) || (
                referencePath
                .split('/')        
                .every((elem, index) => 
                    (elem.startsWith(':') && elementsToTest[index])
                    || (elem === elementsToTest[index])
                )   
            )    
        
        return isSamePath
    }

    private interceptor(req: Request, res: Response, next: NextFunction) {
        let privateRoute = this.routes.get().find(route => 
            route.needAuth && 
            this.samePath(route.path, req.path) && 
            route.method === req.method.toLowerCase()
        )
        if (privateRoute) {
            const token = req.headers.authorization
            if (!token) {            
                return res.status(403).json({ error: 'Acesso restrito! É necessário autenticar-se no sistema para prosseguir.' })
            }
        }
        next()    
    }

    private init(): void {
        this.express.use(cors())
        this.express.use(express.urlencoded( {extended: true} )) 
        this.express.use(express.json())
        this.express.use(this.interceptor.bind(this))

        this.routes.get().forEach(route => {
            switch(route.method) {
                case 'get': this.express.get(route.path, route.handler); return
                case 'post': this.express.post(route.path, route.handler); return
            }
        })

        const port = process.env.PORT || 4000
        this.express.listen(port, () => {
            console.log(`API funcionando na porta ${port}`)
        })
    }
}

export default new Server().express