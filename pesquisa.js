<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pesquisa de Extintores</title>
</head>

<body>

<script>

function pesquisarExtintor(){

    let valor = document
    .getElementById("pesquisa")
    .value
    .toLowerCase();

    let linhas = document.querySelectorAll("#tabelaExtintores tr");

    linhas.forEach(linha => {

        let textoLinha = linha.innerText.toLowerCase();

        if(textoLinha.includes(valor)){

            linha.style.display = "";

        }else{

            linha.style.display = "none";

        }

    });

}

</script>

</body>
</html>