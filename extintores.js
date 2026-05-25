let dados = {
  numero,
  tipo,
  validade,
  status,
  observacao,
  cliente
};

let dados = {
  numero,
  tipo,
  validade,
  status,
  observacao,
  cliente
};

extintores.push(dados);

localStorage.setItem("extintores", JSON.stringify(extintores));
extintores.push(dados);

localStorage.setItem("extintores", JSON.stringify(extintores));
function filtrarPorCliente(nomeCliente){

  let extintores = JSON.parse(localStorage.getItem("extintores")) || [];

  let filtrados = extintores.filter(e => e.cliente === nomeCliente);

  mostrarExtintores(filtrados);

  function mostrarExtintores(lista){

  let tabela = document.getElementById("tabelaExtintores");

  tabela.innerHTML = "";

  lista.forEach(ext => {

    tabela.innerHTML += `
      <tr>
        <td>${ext.numero}</td>
        <td>${ext.tipo}</td>
        <td>${ext.validade}</td>
        <td>${ext.status}</td>
        <td>${ext.cliente}</td>
      </tr>
    `;

  });

}
}
