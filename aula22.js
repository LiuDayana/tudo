class Pessoa{
    constructor( Nome,Sobrenome,Idade,DataNas,End){
        this.Nome=Nome
        this.Sobrenome=Sobrenome;
        this.Idade=Idade;
        this.DataNas=DataNas;
        this.End=End;

    }
}

let kaue =new Pessoa01("kaue","Paixão",18,"24-09-2004","Av General Ataliba Leonel")
console.log(kaue);
console.log(typeof kaue);

console.log(`olá, ${kaue.Nome}`)

