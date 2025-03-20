import { listar, pesquisar, cadastrar, deletar, atualizar } from "./index.js";

async function teste()
{

    let valores = {
        telefone: "(12)21212-212",
        idade: 23,
        nome: "abc@abc.com"
    }

    let res = await atualizar(5, valores);
    
    console.log(res);
}

teste();