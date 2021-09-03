function clicou() {
  document.getElementById('agradecimento').innerHTML =
    '<b>Obrigada por clicar</b>'
  //console.log(document.getElementById('agradecimento'))
  //alert('Obrigada por clicar')
}

function redirecionar() {
  window.open('https://br.shein.com/daily-new.html')
  //window.location.href = 'https://br.shein.com/daily-new.html'
}

function trocar(elemento) {
  //document.getElementById('mousemove').innerHTML = 'Obrigada por passar o mouse'
  elemento.innerHTML = 'Obrigada por passar o mouse'
  //alert('trocar texto')
}

function voltar(elemento) {
  //document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui'
  elemento.innerHTML = 'Passe o mouse aqui'
}

function load() {
  alert('pagina carregada')
}

function funcaochange(elemento) {
  console.log(elemento.value)
}

/*
function soma(n1, n2) {
  return n1 + n2
}
*/

/*
var validar = 0
function validaIdade(idade) {
  validar
  if (idade >= 18) {
    validar = true
  } else {
    validar = false
  }
  return validar
}

var idade = prompt('Qual sua idade?')
validaIdade(idade)
console.log(validar)
*/

//alert(soma(5, 10))

/*
var d = new Date()
alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes())
*/

/*
var count
for (count = 0; count <= 5; count++) {
  alert(count)
}
*/

/*
var count = 0
while (count <= 5) {
  console.log(count)
  alert(count)
  count++
}
*/

/*
var idade = prompt('Qual sua idade')
if (idade >= 18) {
  alert('maior de idade')
} else {
  alert('menor de idade')
}
*/

/*
var fruta = [
  { nome: 'maça', cor: 'vermelha' },
  { nome: 'uva', cor: 'roxa' }
]
console.log(fruta)
alert(fruta[1].nome)
*/

/*
var fruta = { nome: 'maça', cor: 'vermelha' }
console.log(fruta.nome)
alert(fruta.cor)
*/

//var lista = ['maça', 'pera', 'laranja']
//lista.push('')
//lista.pop();

//console.log(lista)
//console.log(lista.toString())
//console.log(lista.join(' - '))

//var nome = "Laura Kimberly";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japao e o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 + n2 );
//console.log(frase.toLowerCase());
//alert(frase.replace ("Japao", "Brasil"))
