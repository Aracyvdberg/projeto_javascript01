//criando lista simples de dados:

//let dados = [
//"Rayssa Leal" ,
//"Beatriz Souza",
//"Rebecca Andrade" , ///usar colchetes para criar listas ou array
//];
//export { dados }; // Exportando a variável dados

///criando lista de objetos:

let dados = [
    {
        titulo: "Rayssa Leal",
        descricao: "Rayssa Leal, a Fadinha, é uma skatista brasileira que conquistou o mundo com seu talento e carisma. Aos poucos anos, ela já coleciona títulos e inspira milhões de jovens.",
        link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        tags: "sk8 skate ouro bronze maranhense street fada 2024 alteta",
    },
    {
        titulo: "Beatriz Souza",
        descricao: "Beatriz Souza é uma judoca brasileira que se destacou nos Jogos Olímpicos de Paris 2024, conquistando a medalha de ouro e inspirando novas gerações de atletas e com isso se tornou a primeira mulher a conquistar uma medalha de ouro Olímpica na história do Esporte Clube Pinheiros. Na final da categoria acima de 78kg, derrotou a israelense Raz Hershko. A vitória marcou um momento histórico para o judô brasileiro e se tornou a primeira medalha de ouro olímpica desde Rafaela Silva em 2016.",
        link: "https://pt.wikipedia.org/wiki/Beatriz_Souza",
        tags: "judô judo pesado melhada de ouro 2024 atleta categoria 78 kg",
    },
    {
        titulo: "Rebeca Andrade",
        descricao: "Rebeca Andrade é uma ginasta brasileira que conquistou o mundo com suas acrobacias e força. Aos poucos anos, ela já coleciona títulos e é considerada uma das maiores ginastas da história do Brasil.",
        link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        tags: "atletismo solo saltos ginástica ouro ginastica 2024",
    }
];

let rayssa = {
    titulo: "Rayssa Leal",
    descricao: "Popularmente chamada de “Fadinha do Skate”, Rayssa ganhou esse apelido após seu vídeo fazendo manobras de skate fantasiada de fada viralizar na internet aos sete anos de idade.[1][25] Desde então, ela se tornou conhecida na cena do skate brasileira e nas redes sociais. Seu sucesso nas competições fez dela uma atleta reconhecida no skate mundial.",
    link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
}

//-tipos de variáveis javascript--------------------

// ----Tipos primitivos------
let nome = "João"; // String
let idade = 30; // Number
let estaChovendo = true; // Boolean
let carro = null; // Null
let x; // Undefined
let simbolo = Symbol(); // Symbol
let numeroGrande = 123456789012345678901234567890n; // BigInt

// ----Tipos objeto-----
let pessoa = {
  nome: "Maria",
  idade: 25
}; // Object
let numeros = [1, 2, 3, 4]; // Array
function saudacao(nome) {
  console.log("Olá, " + nome + "!");
} // Function
let hoje = new Date(); // Date
let regex = /abc/; // RegExp

//----------------------------------