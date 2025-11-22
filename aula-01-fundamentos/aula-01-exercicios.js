console.log("Exerício 1");

const nomeCompleto = "Yuri Barcia Benedetti"
const idade = 29
const cidade = "São Caetano do Sul"
const estudaProgramacao = true

console.log(`Meu nome é ${nomeCompleto}, tenho ${idade} anos, moro em ${cidade} e ${estudaProgramacao ? "estudo programação" : "não estudo programação"}.`);

console.log("Exercício 2");

const peso = 98.8
const altura = 1.89
const IMC = peso / altura**2
console.log(`Peso: ${peso} kg
Altura: ${altura} cm
IMC: ${IMC.toFixed(2)}`);

console.log("Exercício 3");

const produto = {nome: "Iphone 17", preco: 7198, estoque: 10, categorias: ["novo", "usado", "quebrado"] }

console.log(`Produto: ${produto.nome}
Preço: R$ ${produto.preco.toFixed(2)}
Estoque: ${produto.estoque} unidades
Categorias: ${produto.categorias[0]}, ${produto.categorias[1]}, ${produto.categorias[2]}`);

console.log("Exercício 4");

const tempCelsius = 35
const tempFahrenheit = (tempCelsius * (9/5)) + 32
const tempKelvin = tempCelsius + 273.15

console.log(`Temperatura em Celsius: ${tempCelsius} °C
Temperatura em Fahrenheit: ${tempFahrenheit.toFixed(2)} °F
Temperatura em Kelvin: ${tempKelvin.toFixed(2)} K`);

console.log("Exercício 5");

const alunos = [
    {nome: "Jorge", nota1: 5, nota2: 8},
    {nome: "Ana", nota1: 8, nota2: 7},
    {nome: "Pedro", nota1: 2, nota2: 8},
    {nome: "Mario", nota1: 7, nota2: 10}]

console.log(`1. Média de ${alunos[0].nome}: ${(alunos[0].nota1 + alunos[0].nota2) / 2}.
Média de ${alunos[1].nome}: ${(alunos[1].nota1 + alunos[1].nota2) / 2}.
Média de ${alunos[2].nome}: ${(alunos[2].nota1 + alunos[2].nota2) / 2}.
Média de ${alunos[3].nome}: ${(alunos[3].nota1 + alunos[3].nota2) / 2}.`);

console.log(`2. Quantidade de alunos: ${alunos.length}`);

console.log(`3. Nome do primeiro aluno: ${alunos[0].nome}
Nome do último aluno: ${alunos[alunos.length - 1].nome}`);

console.log("Exercício Extra");

const produtos = [ 
    {nome: "Banana", preco: 2, quantidade: 50},
    {nome: "Maçã", preco: 3, quantidade: 40},
    {nome: "Melão", preco: 10, quantidade: 5}]
let desconto = 0

const subTotal0 = produtos[0].preco * produtos[0].quantidade
const subTotal1 = produtos[1].preco * produtos[1].quantidade
const subTotal2 = produtos[2].preco * produtos[2].quantidade

const totalCarrinho = subTotal0 + subTotal1 + subTotal2

if (totalCarrinho > 200){
   desconto = totalCarrinho * 0.1
}

console.log(`Carrinho de compras
1. ${produtos[0].nome} x${produtos[0].quantidade} - R$ ${subTotal0}
2. ${produtos[1].nome} x${produtos[1].quantidade} - R$ ${subTotal1}
3. ${produtos[2].nome} x${produtos[2].quantidade} - R$ ${subTotal2}
------------------------
Subtotal: R$ ${totalCarrinho.toFixed(2)}
Desconto (10%): R$ ${desconto.toFixed(2)}
TOTAL: R$ ${(totalCarrinho - desconto).toFixed(2)}`)
