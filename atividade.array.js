//1 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método map para criar
//um novo array contendo o dobro de cada elemento.

const numeros = [1, 2, 3, 4,5];
const newArray = numeros.map((nn) => nn*2);
console.clear();
console.log('Números:');
console.log(numeros)

console.log('novo array');
console.log(newArray)


//2 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método filter para criar
//um novo array contendo apenas os números pares.

console.clear();
const numbers = [1, 2, 3, 4, 5];
let filtroPares = numbers.filter((numero) => {
    if (numero % 2 == 0) {
        return numero
    }
});
console.log(filtroPares);

//3 - Dado o array fruits = ['apple', 'banana', 'orange', //'kiwi'], utilize o método
//forEach para exibir cada fruta no console.

fruits = ['apple', 'banana', 'orange', 'kiwi']

fruits.forEach(item => {
    console.log(item);
});
//Dado o array students

students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 },
    { name: 'Mark', age: 22 }
    ]

students.forEach(item => {
    console.log(item.name)
})
//5- Dado o array students
let nomes = students.map((item) => {
    let arrayNomes = []
    arrayNomes += item.name
    return arrayNomes
})

console.log(nomes);