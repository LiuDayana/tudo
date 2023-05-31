const valores =[
    {produto: "cel",
    valor:150,
},
{ produto:"tv",
valor:1000,

},
{ produto: "pc",
valor:5000,
    
},
]
//10% valores

let novosValores = valores.map((vp) => vp.valores * 1.1);

console.log(novosValores) 
console.log(typeof valores)
console.log(valores)
//

let idadeCandidatos = [ 114,18,17,23,29,45]

let alunosAprovados = idadeCandidatos.filter((idade) =>  {
    return idade >=15 && idade<=29;
});

console.log(alunosAprovados);
