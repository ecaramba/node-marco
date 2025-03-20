// API
// Interface de Acesso Programatico

import express from "express";
import cors from "cors";

import { listar } from "./model/clientes.js";

const app = express();

app.use(cors());

// route -> action 
app.get("/clientes", async (req, res) => {

    let dados = await listar();
    res.json(dados);
});

app.listen(3000, () => {
    console.log("Servidor iniciado")
});
