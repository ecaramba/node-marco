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

/**
 * Cria a conexão com o BD
 * @returns 
 */
async function conexao()
{
    const db = await open({
        filename: "clientes.db",
        driver: sqlite3.Database

    });

    return db;
}

/**
 * Inserindo um novo cliente
 * @param {string} nome 
 * @param {string} email 
 * @param {string} cidade 
 * @param {string} telefone 
 * @param {number} idade 
 * @returns 
 */
export async function cadastrar(nome, email, cidade, telefone, idade)
{
    let sql = 'INSERT INTO clientes'
        + '(nome, cidade, email, idade, telefone)'
        + 'VALUES'
        + "(?, ?, ?, ?, ?)";

    try {
        const db = await conexao();

        let retorno = await db.run(sql, nome, cidade, email, idade, telefone);
        return (retorno.changes == 1)? true : false;

    } catch (erro)
    {
        console.log("Deu ruim ao cadastrar");
        return false;
    }

}
/**
 * Altera os dados de um cliente
 * @param {number} id 
 * @param {JSON} colunas 
 */
export function atualizar(id, colunas)
{
    let sql = "UPDATE clientes"
        + "SET telefone = '32-3211-2345', idade = 22"
        + "WHERE id = 50"
    
    return "SET telefone = '32-3211-2345', idade = 22";
}

/**
 * Deleta o cliente pelo id
 * @param {number} id 
 * @returns {boolean}
 */
export async function deletar(id)
{
    let sql = 'DELETE FROM clientes WHERE id = ?';

    const db = await conexao();

    const retorno = await db.run(sql, id);

    return (retorno.changes == 1)? true : false;

}

/**
 * Retorna um cliente pelo id
 * @param {number} id 
 * @returns {JSON}
 */
export async function pesquisar(id)
{
    let sql = "SELECT * FROM clientes WHERE id = " + id;

    const db = conexao();

    return await db.get(sql);

}

/**
 * Lista todos os clientes cadastrados ordenados pelo nome
 * @returns {JSON}
 */
export async function listar()
{
    let sql = "SELECT * FROM clientes ORDER BY nome";

    const db = await conexao();

    return await db.all(sql);

}

