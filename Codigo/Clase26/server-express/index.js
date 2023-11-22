import express from 'express'

const PORT = 4000

const app = express()

app.get('/', (req, res) =>{
    res.send('Hola mundo desde el servidor con express')
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo el http://localhost:${PORT}`);
})