import { listar, pesquisar } from "./index.js";

async function teste()
{

    let res = await pesquisar(50);
    
    console.log(res);
}

teste();