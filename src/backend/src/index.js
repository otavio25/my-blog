const express = require('express')
const app = express()
const cors = require("cors");
const cadastro_textos_router = require("./router/cadastro_textos_router")
const listagem_textos_router = require("./router/listagem_textos_router")

app.use(express.json())
app.use(cors())
app.use(cadastro_textos_router)
app.use(listagem_textos_router)

app.listen(3333, ()=>{
    console.log('Servidor rodando....')
})