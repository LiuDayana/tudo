//5 Faça um programa conferir sua idade. Se a idade for menor do que 18 anos, exiba 
//uma mensagem informando que o usuário é menor de idade. Se a idade for igual ou maior 
//do que 18 anos e menor do que 60 anos, exiba uma mensagem informando que o usuário 
//é adulto. Se a idade for igual ou maior do que 60 anos, exiba uma mensagem informando 
//que o usuário é idoso.
var idade = parseInt(prompt("Qual a sua idade?"));
if (idade < 18) {
    alert("Voce e menor de idade");
} else if (idade >= 18 && idade < 60) {
    alert(" voce e adulto");
} else {
    alert("voce e idoso");
}
