// CRUD
// C -> Create -> Criar
// R -> Read -> Ler
// U -> Update -> Atualizar
// D -> Delete 

// Banco de Dados
// SQL   -> relacional -> estruturado -> Mysql, sqlserver, oracle, postgres
// NoSQL -> Mongodb, redis, cassandra, dinamo

import { open } from "sqlite";
import sqlite3 from "sqlite3";

export function cadastrar()
{

}

export function atualizar()
{

}

export function deletar()
{

}

export function pesquisar()
{

}

/**
 * Lista todos os clientes cadastrados ordenados pelo nome
 * @returns {JSON}
 */
export async function listar()
{
    let sql = "SELECT * FROM clientes ORDER BY nome";

    const db = await open({
        filename: "clientes.db",
        driver: sqlite3.Database

    });

    return await db.all(sql);

}

