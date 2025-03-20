$(document).ready(function(){

    $.getJSON("http://localhost:3000/clientes", function(dados){
        
        console.log(dados);
    }); // fim getJson

});