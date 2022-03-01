// EXERCISE 01

let numbers = [1,2,3,4,5,6,7,8,9,10]

const even = (array) => {
    
   if(array[0] % 2 === 0) {
       console.log(array[0]);
   }

    array.length !== 0 && even(array.filter((_, index) => index !== 0));
}
console.log(even(numbers));


// EXERCISE 02 

// number > = 1 

const fibonacci = (number) => {

    if(number === 1 || number === 2) {
        return 1;
    }

    return (fibonacci(number -1) + fibonacci(number -2));

}
console.log(fibonacci(8));

// EXERCISE 03

const people = [
{
name: 'Suellen',
city: 'Curitiba'
},
{
name: 'Enma',
city: 'Leipzig'
},
{
name: 'Tati',
city: 'Curitiba'
},
{
name: 'Jaque',
city: 'São Paulo'
},
{
name: 'Patricia',
city: 'Rio de Janeiro'
},
{
name: 'Stefanie',
city: 'Berlin'
},

]

// MAP - 
// Mostra o nome da pessoa acompanhado de the Great. Ex: "Jaque, the Great!"

const showName = (array) => {
    return array.map((a)  => { 
        return `${a.name}, the Great!`;
    })
}
console.log(showName(people));

// FILTER
// Filtra o array mostrando só pessoas que moram em Curitiba

const showCuritiba = (array) => {
    return array.city === 'Curitiba';

}

let filtered = people.filter(showCuritiba);
console.log(filtered);


// REDUCE 
// Mostra o número de pessoas que moram em Curitiba

    const cities = people.reduce((total, elemento) => {
        
        
        if (elemento.city === 'Curitiba') {
            return total = total + 1;
        }
        else {
            return total;
        }
    
    }, 0);
    console.log(`This city appears ${cities} times in this array of people.`);