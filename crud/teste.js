import { listar } from "./index.js";

async function teste()
{

    let res = await listar();
    
    console.log(res);
}

teste();