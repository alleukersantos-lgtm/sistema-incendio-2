
let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

function salvar(){
  localStorage.setItem("clientes", JSON.stringify(clientes));
}

function adicionarCliente(){

  let empresa = document.getElementById("empresa").value;
  let cnpj = document.getElementById("cnpj").value;
  let responsavel = document.getElementById("responsavel").value;
  let telefone = document.getElementById("telefone").value;

  clientes.push({empresa, cnpj, responsavel, telefone});

  salvar();
  mostrar();
}

function mostrar(){

  let tabela = document.getElementById("tabela");
  tabela.innerHTML = "";

  clientes.forEach((c, i) => {
    tabela.innerHTML += `
    <tr>
      <td>${c.empresa}</td>
      <td>${c.cnpj}</td>
      <td>${c.responsavel}</td>
      <td>${c.telefone}</td>
      <td>
        <button onclick="excluir(${i})">Excluir</button>
      </td>
    </tr>`;
  });

}

function excluir(i){
  clientes.splice(i,1);
  salvar();
  mostrar();
}

function pesquisarCliente(){

  let valor = document.getElementById("pesquisa").value.toLowerCase();

  document.querySelectorAll("#tabela tr").forEach(tr => {
    tr.style.display = tr.innerText.toLowerCase().includes(valor) ? "" : "none";
  });


}

mostrar();