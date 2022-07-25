//========DESAFIO 1=============
var employee = {
    code: 10,
    name: 'John'
};
console.log(employee.code, employee.name);
var pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
};
var pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
};
var pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};
var pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
};
//========DESAFIO 3=============
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = "0";
var valor = 0;
function somarAoSaldo(soma) {
    valor += soma;
    campoSaldo.innerHTML = valor.toString();
}
function limparSaldo() {
    campoSaldo.innerHTML = '';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
