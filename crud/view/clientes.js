$(document).ready(function(){

    $.getJSON("http://localhost:3000/clientes", function(dados){
        

        dados.forEach((item) => {

            let html = '<tr>'
                +'<td>'+ item.id +'</td>'
                +'<td>'+ item.nome +'</td>'
                +'<td>'+ item.email +'</td>'
                +'<td>'+ item.telefone +'</td>'
                +'<td>'+ item.cidade +'</td>'
                +'<td>'+ item.idade +'</td>'
                +'</tr>'
            
            $("#lista").append(html);

        });

    }); // fim getJson

    $("#bt-salvar").click(() => {

        let nome = $("#nome").val();
        let email = $("#email").val();

        $("input").removeClass('is-invalid');

        if (nome.trim() == '')
        {
            $("#nome").addClass('is-invalid');
        }

        if (email == '')
        {
            $("#email").addClass('is-invalid');
        }

    }); // fim do click

});