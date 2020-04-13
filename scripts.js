// Alerta na Tela 
alert('Aprendendo JavaScript!');

// FORMAS DE DECLARAR VARIAVEIS
// VAR
var nome = 'Cleverson';
// LET
let curso = "JavaScript Básico";
// CONSTANTE
const PI = 3.14;

// IMPRESSÃO NO CONSOLE.LOG
console.log('---------------------------------------- ');
console.log('Impressão das variáveis (console.log):');
console.log('Var Nome: ', nome);
console.log('Let Curso: ', curso);
console.log('Constante PI', PI);

// FUNCÕES
console.log('---------------------------------------- ');
// FUNÇÃO COM PARAMETRO
function soma_x_y(x, y) 
{
	let total;
	total = x + y;

	return total;
};

// CHAMADA DE FUNÇÃO - EXECUÇÃO
console.log('Resultado da função -> soma_x_y(10,15):');
console.log(soma_x_y(10,15));

// CONDICIONAL - TERNARIO
console.log('---------------------------------------- ');
console.log('Condicional Ternario -> nome == curso ? true : false');
nome == curso ? console.log(true) : console.log(false);

// CONDICIONAL IF - ELSE IF - ELSE
console.log('---------------------------------------- ');
console.log('Condicionais IF - ELSEIF - ELSE');
var x = 100;
if (x == 0) {
	console.log('X é igual a Zero - IF');
 } else if (x < 0) {
 	console.log('X é menor que Zero - ELSEIF');
 } else {
 	console.log('X é maior que Zero - ELSE');
 };

// SWITCH CASE / DEFAULT
console.log('---------------------------------------- ');
console.log('SWITCH CASE -> let c :');
let c = 'a'
switch(c) {
	case ('a' || 'e' || 'i' || 'o' || 'u'):
 		console.log('A');
 		break;
 	case ('b' || 'c' || 'd' || 'f' || 'g'):
 		console.log('B');
 		break;	
	case ('h' || 'j' || 'k' || 'l' || 'm'):
 		console.log('C');
 		break;
 	default:
 		console.log('D');
 		break;
};

// LOOP DE REPETICAO - FOR
console.log('---------------------------------------- ');
console.log('LOOP DE REPETIÇÃO -> FOR -> TABUADA (N) até 10:');
n = 5;
for (let i=0; i<10;i++) {
	console.log(n + ' x ' + (i+1) + ' = ' + (n*(i+1)));
 };

// LOOP DE REPETICAO - WHILE
console.log('---------------------------------------- ');
console.log('LOOP DE REPETIÇÃO -> WHILE -> TABUADA (N) até 10:');
let i = 0;
while(i<10) {
	console.log(n + ' x ' + (i+1) + ' = ' + (n*(i+1)));;
 	i++;
 };

// LOOP DE REPETICAO - DO WHILE
/*	do {
 		resposta = prompt('Digite sua resposta:');
 		console.log('Sua reposta foi ' + resposta);
 	} while (resposta !== ''); */

// DEFININDO UM OBJETO 
console.log('---------------------------------------- ');
console.log('Objeto pessoaConstructorManual -> Criado de forma Manual:');
var pessoaConstructorManual = {
	nome: 'Benedito Junior',
	idade: 50,
};

console.log(typeof(pessoaConstructorManual));
console.log(pessoaConstructorManual);

console.log('---------------------------------------- ');
console.log('Objeto novaPessoa -> Criado através do Método Constructor:');

// EXEMPLO DE CONSTRUCTOR - OBJETO PESSOA
function Pessoa(nome,idade) {
	this.nome = nome;
    this.idade = idade;

    this.exibeNome = function() {
        console.log("Meu nome é: " + this.nome); 
    };
    this.exibeIdade = function() {
        console.log("Minha idade é: " + this.idade); 
    };
    this.envelhece = function(anos=1) {
        this.idade += anos; 
    };
};

// CRIANDO OBJETO
let novaPessoa = new Pessoa('Cleverson',29);
console.log(typeof(novaPessoa));
console.log(novaPessoa);

console.log('---------------------------------------- ');
console.log('Executando as fuções -> exibeNome | exibeIdade | envelhece');
// EXECUTANDO FUNCOES PARA O OBJETO
novaPessoa.exibeNome();
novaPessoa.exibeIdade();
novaPessoa.envelhece(10);
console.log('Minha idade após executar a função -> envelhece(10):');
novaPessoa.exibeIdade();

// CRIANDO ARRAY
let meuArray = [5, 3, 8, 10, 'A', 'Z', [1,2,3]];
let arrayVazio = [];
console.log('---------------------------------------- ');
console.log('Conteúdo da variável meuArray: ', meuArray);
console.log('Conteúdo da variável arrayVazio: ', arrayVazio);

let string = 'String como Array';

// FUNÇÃO PARA RETORNAR ELEMENTOS DE UM ARRAY + FOREACH()
let cores = ['Verde', 'Amarelo', 'Azul', 'Branco', 'Preto', 'Cinza'];
console.log('---------------------------------------- ');
console.log('Função ForEach() + Imprimir -> cores.forEach(Imprimir):');

cores.forEach(Imprimir);

function Imprimir(item) {
    console.log(item); 
};

// JSON
JSON;
// TRANSFORMAR OBJETO EM ->  JSON (STRING)
var myObj = { a:1, b:2, };
var json_string = JSON.stringify(myObj);
console.log('---------------------------------------- ');
console.log('Conversão de Objeto em JSON string (JSON.stringify):');
console.log(json_string);