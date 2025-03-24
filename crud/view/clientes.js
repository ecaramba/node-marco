$(document).ready(function(){

    let backend = (location.hostname != 'localhost')?
        'https://backend-cadastro-qvtt.onrender.com':
        'http://localhost:3000';

    function listarClientes(coluna, ord)
    {
        let dados = {
            coluna,
            ord
        }

        $.getJSON(backend + "/clientes", dados, function(dados){
            

            $("#lista").empty();

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
    }

    listarClientes();

    $("#bt-salvar").click(() => {

        let nome = $("#nome").val();
        let email = $("#email").val();
        let cidade = $("#cidade").val();
        let telefone = $("#telefone").val();
        let idade = $("#idade").val();

        let temErro = false;

        $("input").removeClass('is-invalid');

        if (nome.trim() == '')
        {
            $("#nome").addClass('is-invalid');
            temErro = true;
        }

        if (email == '')
        {
            $("#email").addClass('is-invalid');
            temErro = true;
        }

        if (temErro == false)
        {
            // envia pro servidor

            let dados = {
                nome,
                email,
                cidade,
                idade,
                telefone
            }

            $.post(backend + "/clientes/novo", dados, (retorno) => {

                if (retorno == true)
                {
                    $("#form-cadastro").modal("hide");
                    
                    let html = '<tr>'
                        +'<td></td>'
                        +'<td>'+ dados.nome +'</td>'
                        +'<td>'+ dados.email +'</td>'
                        +'<td>'+ dados.telefone +'</td>'
                        +'<td>'+ dados.cidade +'</td>'
                        +'<td>'+ dados.idade +'</td>'
                        +'</tr>';

                    $("#lista").append(html);

                    $("#toast-add").toast('show');

                    $("input").val("");
                }

            }); //fim do post
        }

    }); // fim do click

    $(".ord").click(function(){

        let coluna = $(this).attr("coluna");
        let ord = $(this).attr("ord");

        ord = (ord == "ASC") ? "DESC" : "ASC";
        $(this).attr("ord", ord);
       

        $(".ord").removeClass("link-secondary");
        $(".ord").addClass("link-primary");

        $(this).removeClass("link-primary");
        $(this).addClass("link-secondary");

        listarClientes(coluna, ord);


    }); // fim do click link

});