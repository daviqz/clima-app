import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'

import routes from './routes'

const app = express()

const port = process.env.PORT || 4000

app.use(cors())
app.use(express.urlencoded( {extended: true} )) 
app.use(express.json())

const samePath = (referencePath: string, pathToTest: string) => {
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

const interceptor = (req: Request, res: Response, next: NextFunction) => {
    let privateRoute = routes.find(route => 
        route.needAuth && 
        samePath(route.path, req.path) && 
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
app.use(interceptor)

routes.forEach(route => {
    switch(route.method) {
        case 'get': app.get(route.path, route.handler); return
        case 'post': app.post(route.path, route.handler); return
    }
})

app.listen(port, () => {
    console.log(`API funcionando na porta ${port}`)
})