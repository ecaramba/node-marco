import { listar, pesquisar, cadastrar } from "./index.js";

async function teste()
{

    let res = await cadastrar("Paulo", "paulo@xzc.com", "Pinhais");
    
    console.log(res);
}

teste();