import express from 'express'
import cors from 'cors'
// import mongoose from 'mongoose'
import routes from './routes'

class App {
    public express: express.Application

    public constructor () {
        this.express = express()
        this.middlwares()
        this.database()
        this.routes()
    }

    private middlwares (): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database (): void {
        // mongoose.connect('mongodb://localhost:port/tsnode', {
        //     useNewUrlParser: true
        // })
    }

    private routes (): void {
        this.express.get('/', (req, res) => res.send('Hello World'))
        this.express.use(routes)
    }
}

export default new App().express
