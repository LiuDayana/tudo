//7 Faça um programa que peça ao usuário para digitar um número inteiro. Se o número 
//for positivo, exiba uma mensagem informando que o número é positivo. Se o número for 
//negativo, exiba uma mensagem informando que o número é negativo. Se o número for 
//igual a zero, exiba uma mensagem informando que o número é zero. (Aplicar no Console).

num = Number(prompt("Insira um número:"))

if (num < 0) {
console.log("Negativo");
} else if (num > 0) {
    console.log("Positivo")
} else {
    console.log("é zero")
}