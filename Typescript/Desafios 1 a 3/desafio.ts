//========DESAFIO 1=============
let employee = {
    code: 10,
    name: 'John'
};

console.log(employee.code, employee.name)


/// nenhum erro 

//========DESAFIO 2=============
interface person {
    nome: String, idade: Number, profissao: string
}
let pessoa1: person = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
}
let pessoa2: person =  {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
}
let pessoa3: person =  {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
}
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}

//========DESAFIO 3=============

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = "0"

let valor:number = 0

function somarAoSaldo(soma:number) {
    valor += soma
    campoSaldo.innerHTML = valor.toString()
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

if (botaoAtualizar){
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
}

if (botaoLimpar){
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
}