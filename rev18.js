for(let i = 0;i<=10; i ++){
    console.log(`contador ${i}`);
}
// console.log('---------------------');

let salaAula = ["vitor","samuel","bruno","kaue","day"];
console.log(salaAula[0]);
console.log(salaAula[1]);
console.log(salaAula[2]);
console.log(salaAula[3]);
console.log(salaAula[4]);
//olá,(nomePessoa)

// console.log('-----------------');

const nomes = (nome) =>{
    return console.log(`olá alunos : ${nome}`);
}

salaAula.forEach((a,b) => {
    nomes(a,b);
})

 let cores = ["azul","amarelo","pink","preto"]

 cores.forEach((item) => {
    console.log(`a cor da moda é: ${item}`);
 })

 //criação da array com e-mails de alunos
 const emailsAlunos =
 ["aluno1@"]