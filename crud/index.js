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

/**
 * Retorna um cliente pelo id
 * @param {number} id 
 * @returns {JSON}
 */
export async function pesquisar(id)
{
    let sql = "SELECT * FROM clientes WHERE id = " + id;

    const db = await open({
        filename: "clientes.db",
        driver: sqlite3.Database

    });

    return await db.get(sql);

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

