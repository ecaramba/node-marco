$(document).ready(function(){

    let backend = (location.hostname != 'localhost')?
        'https://backend-cadastro-qvtt.onrender.com':
        'http://localhost:3000';

    $(".bt-logar").click(()=>{

        let dados = {
            usuario: $("#usuario").val(),
            senha: $("#senha").val()
        }

        $.post(backend + "/login", dados, function(retorno){
            
            if(retorno != "false"){
                
                let valor = JSON.stringify(retorno);
                sessionStorage.setItem("logado", valor);
                location.assign("/");
            } else 
            {
                $("#msg-erro").removeClass("d-none");
            }

        }); // fim post

    }); // fim do bt-logar

}); 