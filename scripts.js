// Alerta na Tela 
alert('APERTE F12 PARA VER OS RESULTADOS!');

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
}

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
 }

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
}

// LOOP DE REPETICAO - FOR
console.log('---------------------------------------- ');
console.log('LOOP DE REPETIÇÃO -> FOR -> TABUADA (N) até 10:');
n = 5;
for (let i=0; i<10;i++) {
	console.log(n + ' x ' + (i+1) + ' = ' + (n*(i+1)));
 }

// LOOP DE REPETICAO - WHILE
console.log('---------------------------------------- ');
console.log('LOOP DE REPETIÇÃO -> WHILE -> TABUADA (N) até 10:');
let i = 0;
while(i<10) {
	console.log(n + ' x ' + (i+1) + ' = ' + (n*(i+1)));;
 	i++;
 }

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
}

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
    }
}

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
}

// JSON
JSON;
// TRANSFORMAR OBJETO EM ->  JSON (STRING)
var myObj = { a:1, b:2, };
var json_string = JSON.stringify(myObj);
console.log('---------------------------------------- ');
console.log('Conversão de Objeto em JSON string -> JSON.stringify():');
console.log(json_string);
// CONVERTER STRING EM JSON (PARSE)
console.log('Conversão de JSON String Objeto -> JSON.parse():');
meuObj = JSON.parse(json_string);
console.log(meuObj);

// ATRIBUIÇÃO MULTIPLA (POS. ARRAY -> variáveis)
var myArr = [1,2,3];
var [aa, bb, cc] = myArr;

// ATRIBUIÇÃO MULTIPLA (PROPRIEDADES OBJETO -> variáveis)
var Obj = { d: 5,	e: 10, f: 15 };
var {d, e, f} = Obj;

// SPREAD -> ... -> PREENCHENDO PARAMETROS P/ FUNÇÃO
console.log('---------------------------------------- ');
var array1 = [5,20,2,4,9];
function soma5(n1,n2,n3,n4,n5) {
	return n1 + n2 + n3 + n4 + n5;
}
console.log('Soma Utilizando Spread ->  soma5(...array1) : ', soma5(...array1));
// OUTRA FORMA DE UTILIZAR SPREAD ... ABRIR ARRAYS EM OUTRO
var array2 = [10,11,12];
var array3 = [...array1, ...array2]

// FOR IN - EXEMPLO ARRAY
console.log('---------------------------------------- ');
console.log('FOR IN() - EXEMPLO EM ARRAY:');
for (let a in array1) {
	console.log(a);
}
// FOR IN - EXEMPLO OBJETO
console.log('---------------------------------------- ');
console.log('FOR IN() - EXEMPLO EM OBJETO:');
for (let a in pessoaConstructorManual) {
	console.log(a);
}

// FOR OF - EXEMPLO ARRAY
console.log('---------------------------------------- ');
console.log('FOR OF() - EXEMPLO EM ARRAY:');
for (let a of array1) {
	console.log(a);
}

// FUNCAO DE EXEMPLO P/ PRÁTICA-> MINIMO -> MENOR NUMERO
function min(numbers) {
	var min = numbers[0]
	for (var i=0;i< numbers.length;i++){
		if (numbers[i] < min){
			min = numbers[i];
		}
	}
	return min;
}

// FUNCAO DE EXEMPLO P/ PRÁTICA-> ELEVATOR -> SIMULA ELEVADOR
var Elevator = {
	floor: 0,
	total: 3,
	up(){
		if (this.floor < this.total) {
			this.floor++;
		}
		this.print();
	},
	down(){
		if (this.floor > 0) {
			this.floor--;
		}
		this.print();
	},
	print() {
		console.log('Andar: ', this.floor);
	}
}

/* // -----------------------------------------------------
// ----------- EXERCICIO SEGUNDO MAIOR -----------------
// -----------------------------------------------------
//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin(); 

//Lendo dados
stdin.addListener('data', text => {
  const textoLido = text.toString().trim().split('\n').map(s => s.trim());
  
  stdin.pause(); // stop reading
  
  main(textoLido);
});

function segundoMaior(numeros)
{
    let maior = numeros[0];
    let segMaior = numeros[0];
    for(let num of numeros)
    {
        if(num > maior){
            segMaior = maior;
            maior = num;
        }
        else if(num > segMaior && num != maior)
            segMaior = num;
    }
    return segMaior;
}

function main(linhas)
{   
    for(let valores of linhas){
        console.log(segundoMaior(valores.split(' ').map(Number)));
    }
}
// -----------------------------------------------------
// ------- EXERCICIO FUNCAO CRIA OBJETO MAIOR ----------
// -----------------------------------------------------
//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin(); 

//Lendo dados
stdin.addListener('data', text => {
  const textoLido = text.toString().trim().split('\n').map(s => Number(s));
  
  stdin.pause(); // stop reading
  
  main(textoLido);
});

function meuObjeto(a, b)
{
  let meuObjeto = {
    largura: a,
    comprimento: b,
    perimetro: 2*(a+b),
    area: a*b,
  }
  return meuObjeto 
}

function main(valores)
{   
    let obj = meuObjeto(valores[0], valores[1]);
    console.log(obj.largura);
    console.log(obj.comprimento);
    console.log(obj.perimetro);
    console.log(obj.area);
}
// ----------------------------------------------------- */

// NUMBER - PROPR. E METODOS
console.log('---------------------------------------- ');
console.log('TRABALHANDO COM NUMEROS - PROPRIEDADES E METODOS:');
console.log('Number.IsInteger(x): ', Number.isInteger(x));
console.log('Number.IsNaN(x): ', Number.isNaN(x));
console.log('Função Global IsNaN("Hello"): ', isNaN('Hello'));
// TOFIXED() - CASAS DECIMAIS
console.log('x.toFixed(2): ', x.toFixed(2));

// MATH
console.log('---------------------------------------- ');
console.log('MATH:');
console.log('Potencia 2^3: = ', Math.pow(2,3));
console.log('Raiz Quadrada 25 = ', Math.sqrt(25));
console.log('Absoluto de -100: ', Math.abs(-100));
console.log('Arredonda para Cima (5.1) = ', Math.ceil(5.1));
console.log('Arredonda para Baixo (7.8) = ', Math.floor(7.8));
console.log('Arredonda para Inteiro +Proximo (7.6):  = ', Math.round(7.6));
console.log('Retornar parte Inteira do Numero (15.4):  = ', Math.trunc(15.4));
console.log('Máximo (22,10,15,32,44,60,8,16):  = ', Math.max(22,10,15,32,44,60,8,16));
console.log('Mínimo (22,10,15,32,44,60,8,16):  = ', Math.min(22,10,15,32,44,60,8,16));
console.log('Aleatório entre 0 até 1:  = ', Math.random());
console.log('Aleatório entre 0 até 100:  = ', Math.random()*100);
console.log('Aleatório entre 1 até 100 (só Inteiros):  = ', Math.trunc((Math.random()*100)+1));

// FUNCAO DE EXEMPLO P/ PRÁTICA-> MENSAGEM ALEATORIA
console.log('---------------------------------------- ');
function mensagem_aleatoria() {
	var number = Math.trunc((Math.random()*5)+1);
	switch(number){
		case 1: console.log('Mensagem aleatória 1: Olá tudo bem?'); break;
		case 2: console.log('Mensagem aleatória 2: Em algum momento, já disse "Olá tudo bem?"'); break;
		case 3: console.log('Mensagem aleatória 3: Olá tudo bem.... de novo?'); break;
		case 4: console.log('Mensagem aleatória 4: To ficando cansado já...'); break;
		case 5: console.log('Mensagem aleatória 5: Vai dormir cara...'); break;
	}
}
mensagem_aleatoria();

// STRINGS - CONCATENANDO COM CRASE
console.log('---------------------------------------- ');
console.log('STRINGS ');
stringConcatenada = `Concatenando c/ crases -> NOME: ${nome}, CURSO ${curso}`;
console.log(stringConcatenada);
console.log(`Tamanho da String -> curso.lenght: ${curso.length}`);
console.log(`1ª Ocorrência (busca) -> curso.indexOf('Básico'): ${curso.indexOf('Básico')}`);
console.log(`Última Ocorrência (busca) -> curso.lastIndexOf('c'): ${curso.lastIndexOf('c')}`);
console.log(`Repetindo string -> nome.repeat(3): ${nome.repeat(3)}`);
console.log(`Extrair parte da String -> curso.substr(11, 6): ${curso.substr(11,6)}`);
console.log(`MAIUSCULA -> curso.toUpperCase(): ${curso.toUpperCase()}`);
console.log(`mínuscula -> curso.toLowerCase(): ${curso.toLowerCase()}`);
console.log(`Remover Espaços á Esquerda -> curso.trimleft(): ${curso.trimLeft()}`);
console.log(`Remover Espaços á Direita -> curso.trimRight(): ${curso.trimRight()}`);
console.log(`Remover Espaços -> curso.trim(): ${curso.trim()}`);
console.log(`Separar String -> curso.split(' '): ${curso.split(' ')}`);
console.log(`Identificador de Carac. Especiais \ -> \`\``);
console.log(`Carac. Especiais Tabulação: \t Tabulado`);
console.log(`Carac. Especiais Nova Linha: \n >> Nova Linha`);

// EXPRESSOES REGULARES - REGEX
// \d{2} [10] \/ [/] \d{2} [04] \/ [/] \d{4} [2020]
console.log('---------------------------------------- ');
console.log('EXPRESSOES REGULARES - REGEX ');
myRegex = /\d{2}\/\d{2}\/\d{4}/;
var data1 = '05/10/2020';
console.log(data1.match(myRegex));

// FUNCAO DE EXEMPLO P/ PRÁTICA -> VERIFICA_LETRAS_ALFABETO_FALTANTE
console.log('---------------------------------------- ');
function faltandoLetrasAlfabeto(texto) {
	texto = texto.toLowerCase();
	var faltando = '';
	// Objeto Alfabeto
	alfabeto = {'a':0, 'b':0, 'c':0, 'd':0, 'e':0, 'f':0, 'g':0, 'h':0, 'i':0, 'j':0, 'k':0, 'l':0, 'm':0,
				 'n':0, 'o':0, 'p':0, 'q':0, 'r':0, 's':0, 't':0, 'u':0, 'v':0, 'w':0, 'x':0, 'y':0, 'z':0}

	for (var i=0; i<texto.length;i++){
		var letra = texto[i];
		if (letra !== ' '){
			alfabeto[letra]++;
		}
	}

	for (l in alfabeto) {
		if (alfabeto[l] == 0){
			faltando += l;
		}
	}
	return faltando.split();
}
// CHAMANDO FUNÇÃO faltandoLetrasAlfabeto(texto)
console.log('Função treino prático -> LetrasAlfabetoFaltando("abc"): ', faltandoLetrasAlfabeto('ABC'));

// // EXEMPLO REGEX
// //Se preparando para ler dados da entrada padrão
// const stdin = process.openStdin(); 

// //Lendo dados
// stdin.addListener('data', text => {
//   const textoLido = text.toString().trim();
//   stdin.pause(); // para leitura
//   main(textoLido);
// });

// function expressRegular()
// {
//     return /[\d]+/g;
// }

// function main(valor) {
//     const re = expressRegular();
//     const r = valor.match(re);
//     for (const e of r) {
//         console.log(e);
//     }
// }

// DATAS
console.log('---------------------------------------- ');
console.log('DATAS:');
var myDate = new Date('2020-04-16');
console.log('Data como String: ', myDate);
var myDate2 = new Date(2020,04,16,08,26,00);
console.log('Data2 como Números: ', myDate2);

// METODOS GET DATA
console.log('getMilliseconds: ', myDate2.getMilliseconds());
console.log('getSeconds: ', myDate2.getSeconds());
console.log('getMinutes: ', myDate2.getMinutes());
console.log('getHours: ', myDate2.getHours());
console.log('getDate: ', myDate2.getDate());
console.log('getDay: ', myDate2.getDay());
console.log('getMonth: ', myDate2.getMonth());
console.log('getFullYear: ', myDate2.getFullYear());

// METODOS SET
myDate.setMonth(2);
myDate.setFullYear(2021);

// GET TIME
console.log('getTime(): ', myDate2.getTime());

// TO JSON
console.log('toJSON(): ', myDate2.toJSON());

// FUNCAO PRATICA EXEMPLO - DIA DA SEMANA
function diaSemana(ano,mes,dia){
	var data = (new Date(ano, mes-1, dia)).getDay();

	var dias = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];

	return dias[data];
}

console.log('diaSemana(2020,04,18): ', diaSemana(2020,04,18));

// ARRAYS
console.log('---------------------------------------- ');
console.log('ARRAYS:');
myArray3 = [2,4,5,8,10,20,23];
myArray4 = ['y','t','r','f','c','h'];
console.log('myArray3: ', myArray3);
console.log('Tamanho -> lenght: ', myArray3.length);

// TESTE SE TODOS SAO PARES?
console.log('todos -> every (pares): ', myArray3.every(n => n%2==0));

// TESTE SE ALGUM É PAR?
console.log('algum -> some (par): ', myArray3.some(n => n%2==0));


// FILTRAR SÓ ELEMENTOS IMPARES
console.log('Filtrar -> filter (impares): ', myArray3.filter(n => n%2!=0));

// PROCURAR 1º ELEMENTO CONDICAO
console.log('Procurar elemento -> find (par): ', myArray3.find(n => n%2==0));

// PROCURAR INDICE DO 1º ELEMENTO CONDICAO
console.log('Procurar índice -> findIndex (par): ', myArray3.findIndex(n => n%2==0));

// ORDENAR
console.log('Ordenar -> sort : ', myArray4.sort());

// FOREACH PARA CADA
console.log('Para Cada -> forEach : ');
myArray4.forEach(n => console.log(n));

// ALTERAR CADA UM DOS VALORES
arrx = myArray3.map(n => n*10);
console.log(arrx);

// PRINCIPAIS METODOS ARRAYS
// ARRAY - CRIANDO OBJETO DO TIPO ARRAY
var exemploArr = Array(1,2,3,4,5,7,9,8,12,33);
var exemploArr2 = Array.of(5);
console.log(exemploArr);
console.log(exemploArr2);
// CONCATENAR ARRAYS - CONCAT
console.log(exemploArr.concat(exemploArr2));
// VERIFICA SE CONTEM ELEMENTOS - INCLUDES
console.log(exemploArr.includes(7));
// INDEXOF
console.log(exemploArr.indexOf(3));
// LASTINDEXOF
console.log(exemploArr.lastIndexOf(5));
// JOIN
console.log(exemploArr.join(''));
// REVERSE
console.log(exemploArr.reverse());
// PUSH - INSERIR NO FINAL
exemploArr.push('x');
console.log(exemploArr);
// POP  - REMOVER FINAL
console.log(exemploArr.pop());
// UNSHIFT - INSERIR ELEMENTO COMECO ARRAY
exemploArr.unshift('xx');
console.log(exemploArr);
// SHIFT- REMOVER ELEMENTO COMEÇO ARRAY
exemploArr.shift();
console.log(exemploArr);
// SPLICE - REMOVER ELEMENTO POSICAO ESPECIFICA
exemploArr.splice(2,1);
console.log(exemploArr);
// SPLICE - REMOVER 3 ELEMENTOS
exemploArr.splice(2,3);
console.log(exemploArr);
// SPLICE - INSERIE ELMENTOS NA POSICAO ESPECIFICA
exemploArr.splice(2,0, 'x','y','z');
console.log(exemploArr);
// SLICE = SUBARRAY 
console.log(exemploArr.splice(2,6));

// ARRAYS MULTIDIMENSIONAIS
console.log('---------------------------------------- ');
console.log('ARRAYS MULTIDIMENSIONAIS:');
// 1	2	3
// 4	5	6
// 7	8	9
var arrMulti = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

arrMulti.forEach(n => console.log(n));

console.log('Retornando o 5 -> arrMulti[1][1]: ', arrMulti[1][1]);

// LETRAS DO ALFABATEO FALTANDO NA FRASE
function missingLetters(text){
	var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	text = text.toLowerCase();
	var missing = [];
	for(let letter of letters){
		if(text.indexOf(letter) === -1){
			missing.push(letter);
		}
	}
	return missing;
}

console.log(missingLetters('Cleverson Mendes Faria'));

// OBJETOS
console.log('---------------------------------------- ');
console.log('OBJETOS:');
var meuObjeto = {
	a: 1,
	b: 2,
	c: 3,
}

// KEYS
console.log('KEYS: ', Object.keys(meuObjeto));
// VALUES
console.log('VALUES: ', Object.values(meuObjeto));
// VERIFICA SE EXISTE UMA PROPRIOEDADE
console.log('hasOwnProperty: ', meuObjeto.hasOwnProperty('c'));
console.log('a' in meuObjeto);
// LISTA COM CHAVES E VALORES DO OBJETO
arr = Object.entries(meuObjeto);
console.log(arr);
// SEAL - NAO ALTERAR OBJETO, INCLUIR OU ADICIONAR NOVAS PROPR.
Object.seal(meuObjeto);
meuObjeto.nova_prop = 'x';
console.log(meuObjeto);
// FREEZE - NAO ALTERAR PROPRIEDADES DO OBJETO
Object.freeze(meuObjeto);
meuObjeto.b = 10;
console.log(meuObjeto);
// VERIFICA SE ESTA CONGELADO OU SELADO
console.log(Object.isSealed(meuObjeto));
console.log(Object.isFrozen(meuObjeto));

// EXERCICIO PRATICO - EXEMPLO ANDANDO NO TABULEIRO
var Table = {
	field: [
		['','',''],
		['','',''],
		['','','']
	],
	position: [0,0],
	up(){
		if(this.position[0] > 0){
			this.position[0]--;
		}
		this.print();
	},
	down(){
		if(this.position[0] < this.field.length-1){
			this.position[0]++;
		}
		this.print();
	},
	left(){
		if(this.position[1] > 0){
			this.position[1]--;
		}
		this.print();
	},
	right(){
		if(this.position[1] < this.field[this.position[0]].length-1){
			this.position[1]++;
		}
		this.print();
	},
	print(){
		var lineStr = '';
		for(var i = 0; i < this.field.length; i++){
			var line = this.field[i];
			for(var j = 0; j < line.length; j++){
				if(this.position[0] === i && this.position[1] === j){
					lineStr += '| X |';
				}else{
					lineStr += '|   |';
				}
			}
			lineStr += '\n';
		}
		console.log(lineStr);
	}
}

Table.print();

// MANIPULANDO HTML COM JAVASCRIPT

// ACESSOS

// ACESSANDO ELEMENTO PELO ID
document.getElementById('myInput');
// ACESSANDO ELEMENTOS PELO NOME DA TAG
document.getElementsByTagName('ul');
// ACESSANDO ELEMENTOS PELO NOME DA CLASSE
document.getElementsByClassName('list-item');
// ACESSANDO ELEMENTOS PELO QUERY SELECTOR COMO NO CSS
document.querySelector('button'); // TAG
document.querySelector('#myInput'); // ID #
document.querySelector('.list-item'); // CLASSE .
document.querySelectorAll('li');
document.querySelectorAll('li:first-child'); // PRIMEIRO ITEM <li>
document.querySelectorAll('li:first-child'); // ÚLTIMO ITEM <li>

// MANIPULANDO
// ALTERAR CONTEUDO DO TEXTO
document.querySelector('.list-item').textContent = 'Cleverson';
// ALTERAR HTML (innerHTML)
document.querySelector('.list-item').innerHTML = '<b>Cleverson2</b>';
document.querySelector('.list-item').outerHTML;

// REMOVER ELEMENTO
// document.querySelector('#myInput').remove();
// CRIAR ELEMENTO
// var elemInput = document.createElement('input');
// document.querySelector('main').appendChild(elemInput);
// INSERIR ANTES DE OUTRO ELEMENTO
var elemLi = document.createElement('li');
elemLi.innerText = 'Item 0';
document.querySelector('.list-item:first-child').insertAdjacentHTML('beforebegin', elemLi.outerHTML);
elemLi.innerText = 'Item 1';
document.querySelector('.list-item').insertAdjacentHTML('afterend', elemLi.outerHTML);

// NAVEGANDO PELA ARVORE HTML
document.querySelector('ul');
document.querySelector('ul').children;
document.querySelector('ul').querySelectorAll('li');
var el1 = document.querySelector('ul').querySelectorAll('li')[0];
el1.parentElement; // Parent do elemento
el1.nextElementSibling; // elemento Seguinte;
el1.previousElementSibling; // elemento anterior;

// ACESSANDO ATRIBUTO
inputVal = document.querySelector('#myInput').value;
inputVal = document.querySelector('#myInput').value = 'Digite seu texto aqui...';
// OBTENDO ATRIBUTO DE UM ELEMENTO
document.querySelector('#myInput').getAttribute('type');
// ALTERANDO ATRIBUTO DE UM ELEMENTO
document.querySelector('#myInput').setAttribute('type','text');
document.querySelector('#myInput').setAttribute('id','myInput2');
// CLASSE DE UM ELEMENTO
// INSERINDO
document.querySelector('#myInput2').classList.add('my-input');

// ACESSANDO STYLE - CSS
document.querySelector('#myInput2').style.backgroundColor = 'red';

// CRIANDO UMA LISTA NO HTML PELO JAVASCRIPT
/* var list1 = [10,20,30,40,50,60];
	 listElement = document.querySelector('ul');

 function render(){
	var html = '';
	for (let item of list1){
		html += `<li>Item ${item}</li>`;
	}
	listElement.innerHTML = html;
}

render(); */

// LISTENER - EVENTO CLICK
var myFunc = function(){console.log('elemento clicado')};
// ADD EVENTO LISTENER
document.querySelector('#myInput2').addEventListener('click', myFunc);
// REMNOVER EVENTO LISTENER
document.querySelector('#myInput2').removeEventListener('click', myFunc);
// EVENTO LISTENER - KEYUP EXIBINDO
document.querySelector('#myInput2').addEventListener('keyup',
function (){
	console.log(this.value)
});

// PROPAGAÇÃO DE EVENTOS - event.stopPropagation();
// EXEMPLO ?UTILIZANDO EVENT -> EVENT.stopPropagation
document.querySelector('ul').addEventListener('click',
function(){
	console.log(this);
});
// COM EVENT.stopPropagation
document.querySelector('li').addEventListener('click',
function(event){
	event.stopPropagation();
	console.log(this);
});

// EVITANDO COMPORTAMENTOS PADROES - EVENT.preventDefault()
document.querySelector('button').addEventListener('contextmenu',
function(){
	event.preventDefault();
	console.log(this);
})

// OBJETO EVENT
// EXEMPLO KEYCODE
document.querySelector('#myInput2').addEventListener('keyup',
function(event){
	if (event.keyCode == 13){
		if (this.value != ''){
			this.style.backgroundColor = 'green';
		} else {
			this.style.backgroundColor = 'red';
		}
	}
})

// TIMERS 
// SETTIMEOUT - EXECUTA DEPOIS DE UM TEMPO
var timer = setTimeout(function (){
	console.log(5555);
}, 2000);

clearTimeout(timer);

// INTERVALS - REPETIR A CADA INTERVALO
var intervalo = setInterval(function (){
	console.log(2222);
}, 2000);

clearInterval(intervalo);

// DEBOUCING 
var myDiv = document.querySelector('div');
	 myInput = document.querySelector('#myInput3');

var myTimeout;

myInput.addEventListener('keyup', function(){
	clearTimeout(myTimeout);
	myTimeout = setTimeout(()=>{
		myDiv.textContent = this.value; 
	}, 1000);
})

// VALIDAÇÃO DE FORM
function submitForm(){
	var myForm = document.forms.myForm;
	if (myForm.message.value == ''){
		alert('A mensagem é obrigatória');
		return false;
	}
}

// MANIPULAR HTML -> EXEMPLO LISTAS
// EXEMPLO INSERINDO ITEM NA LISTA
var list = [1,2,3],
	listElement = document.querySelector('ul');

function insert(event){
	if(event.keyCode === 13){
		list.push(event.target.value);
		event.target.value = '';
		render();
	}
}

function remove(index){
	list.splice(index, 1);
	render();
}

function render(){
	listElement.innerHTML = list.map((item, index) => {
		return `<li onclick="remove(${index})" >${item}</li>`;
	}).join('');
}

render();