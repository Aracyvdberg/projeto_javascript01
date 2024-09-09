//import { dados } from 'dados.js'; // Importando a variável dados
//console.log (dados);
//console.log(dados[0, 1, 2].titulo);

// exibir resultado da pesquisa...teclas ALT + Z coloca o código todo na janela do código - quebra de linha
// usar sempre a crase assim ``
//chamar as variáveis do inseridas no arquivo dados.js assim: ${nome da variável}
//laços de repetição para listar todos os elementos de uma lista:
//para cada dado dentro de uma lista de dados (português)
//for (Let dado for dados); (tradução para o código jávascript)

//criar a função para o botão pesquisar
function pesquisar() {

// Obtém a seção do HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

//let section = document.getElementById("resultados-pesquisa");
//console.log(section);
// lista de repetição para listar dados do arquivo dados.js

let campoPesquisa = document.getElementById("campo-pesquisa").value
		console.log(campoPesquisa);

 // se campoPesquisa for uma string sem nada...poderia escrever também if (campoPesquisa) == ""
 if(!campoPesquisa) {
  section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>";
  return 
}
campoPesquisa = campoPesquisa.toLowerCase()

//Cria a variável resultados
let resultados = "";
let titulo = ""; 
let descricao = "";
let tags = "";



//para cada dado dentro de uma lista de dados (português)
//for (Let dado for dados); (tradução para o código jávascript)
for (let dado of dados) {
  titulo = dado.titulo.toLowerCase()
  descricao = dado.descricao.toLowerCase()
  tags = dado.tags.toLowerCase()
  
  // se o titulo, descrica e tags  includes o campoPesquisa, então, faça...
   if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
//cria um novo elemento na tela do html
    resultados += `
    <div class="item-resultado">
       <h2>
           <a href="#" target="_blank">${dado.titulo}</a>
           </h2>
           <p class="descricao-meta">${dado.descricao}</p>
           <a href=${dado.link} target="_blank">Mais informações</a>
               </div>
               `;
   }
 
}

// a linha 63 a seguir que dizer que 'se o resultado não retornar nada' ou seja, não existir, o resultado recebe o valor da string...
// se campoPesquisa não retornar nada...poderia escrever também if (resultado) == ""
if(!resultados) {
  resultados = "<p>Nada foi encontrado</p>"
}
//atribui o resultado na seção escolhida para mostra-lo:
section.innerHTML = resultados; 
}

function limparpesquisar() {
    const secaoResultados = document.getElementById("resultados-pesquisa");
    while (secaoResultados.firstChild) {
      secaoResultados.removeChild(secaoResultados.firstChild);
    }
  }