
require("dotenv").config()
import express from 'express'
import config from 'config'

const app = express()
//ENV para variaveis de ambiente




//JSON MIDDLEWARE

app.use(express.json())
const port= config.get<number>("port")

//dbConnection
import db from '../config/db'

//Routes
import router from './router'

//Logger
import Logger from '../config/logger'

// middleware
import morganMiddleware from './middleware/morganMiddleware'

app.use(morganMiddleware)
app.use("/api/", router)





app.listen(port, async () => {

    await db()
    Logger.info(`app rodando na porta ${port}`)
})

//Mateus_TS
//vO9fEaqShtAJf1OF

//mongodb+srv://Mateus_TS:<password>@cluster0.4afauau.mongodb.net/?retryWrites=true&w=majority