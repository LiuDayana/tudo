//8 Atividades relacionais: crie um programa que solicite ao usuário que digite a sua 
//altura em metros e o seu peso em quilogramas. Em seguida, o programa deve calcular o 
//índice de massa corporal (IMC) do usuário usando a fórmula IMC = peso / altura*2 e 
//verificar se o IMC está dentro do intervalo saudável de 18,5 a 24,9. O programa deve 
//imprimir na tela se o IMC está dentro do intervalo saudável ou não

var altura = Number(prompt("digite sua altura em metros:"));
var peso = Number(prompt("digite seu peso em quilogramas"));
var imc = peso/(altura*altura);
if (imc >= 18.5 && imc <= 24.9) {
    alert("Você está saudável");
} else {
    alert("Não está saudável");
}
