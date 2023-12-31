import express from 'express';
import cors from 'cors';
import { db } from './database/db.js';

import { postRoutes } from './routes/postRoutes.js';

const app = express()
const port = 8000

app.use(cors())
app.use(express.json())
app.use('/post', postRoutes)

const conn = async () => {
    try {
        await db.authenticate()
        console.log('conectado a la db');
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

app.listen(port, () => {
    conn()
    console.log(`servidor corriendo http://localhost:${port}`);
})