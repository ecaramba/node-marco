// API
// Interface de Acesso Programatico

import express from "express";
import cors from "cors";
import sha1 from "sha1"

import { listar, cadastrar, deletar, logar } from "./model/clientes.js";

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

app.post("/clientes/delete", async(req, res) => {

    let { id } = req.body;

    let retorno = await deletar(id);

    res.json(retorno);

});

app.post("/login", async function(req, res) {

    let {usuario, senha} = req.body;

    let hash = sha1(senha)

    let retorno = await logar(usuario, hash);

    retorno = (retorno) ? retorno : "false";

    res.json(retorno);

});

app.listen(porta, () => {
    console.log("Servidor iniciado")
});
