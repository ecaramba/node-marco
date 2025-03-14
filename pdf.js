
const pdf = require("pdf-lib");
const fs = require("fs");

async function novo()
{
    const doc = await pdf.PDFDocument.create();
    const page = doc.addPage();
    page.drawText("Oi Galera!!!");

    const arquivo = await doc.save();

    fs.writeFile("teste.pdf", arquivo, function(){
        console.log("pdf criado");
    });
}

novo();