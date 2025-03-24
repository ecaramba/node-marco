// API
// Interface de Acesso Programatico

import express from "express";
import cors from "cors";

import { listar, cadastrar } from "./model/clientes.js";

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let porta = (process.env.PROD == 'true')? 80 : 3000;


// route -> action 
app.get("/clientes", async (req, res) => {

    let { coluna, ord } = req.query;


    try {   
        let dados = await listar(coluna, ord);
        res.json(dados);
    } catch (erro)
    {
        console.log(erro);
        res.status(404).send("Coluna não existe no BD")
    }
});

app.post("/clientes/novo", async (req, res) => {

    let dados = req.body;

    let retorno = await cadastrar(dados.nome, 
        dados.email,
        dados.cidade,
        dados.telefone,
        dados.idade
    );
    
    res.json(retorno);

});

app.listen(porta, () => {
    console.log("Servidor iniciado")
});
