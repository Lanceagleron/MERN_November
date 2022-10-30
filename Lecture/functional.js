const numbers = [1, 2, 3, 4, 5];
const testScorePercentages = [95, 77, 40, 63, 85, 90, 70];
const persons = [
    { name: 'Rick', age: 70 },
    { name: 'Morty', age: 14 },
    { name: 'Summer', age: 17 },
    { name: 'Beth', age: 34 },
];

// const doubleNums = (nums) => {
//     const output = [];
//     for(let i = 0; i<nums.length; i++){
//         output.push(nums[i] * 2);
//     }

//     return output
// }


// const double = (n) => n*2;
// const doubleNums = numbers.map(double)

const personHtmlStrings = persons.map((person) => `<p>Name: ${person.name}, Age: ${person.age}</p>`)

const personsWithBirthYear = persons.map((person) => {
    const birthYear = new Date().getFullYear() - person.age;
    return {
        ...person,
        birthYear: birthYear
    };
})


const letterGrades = testScorePercentages.map((pct) => {
    if (pct < 65) {
        return "F"
    }
    if (pct < 70) {
        return "D"
    }
    if (pct < 80) {
        return "C"
    }
    if (pct < 90) {
        return "B"
    }
    return "A"
})

// console.log(letterGrades);

Array.prototype.map2 = function (callBack) {
    const output = [];
    
    for (let i = 0; i < this.length; i++) {
        const newItem = callBack(this[i], i, this);
        output.push(newItem);
    }
    return output
}
const doubleNums = numbers.map2((number) => number * 2)
// const personNames = persons.map((person) => person.name)
// const personAge = persons.map((person) => person.age)

// console.log(doubleNums)


function getEvens(nums) {
    const output = [];

    for(let i = 0; i< nums.length; i++){
        if( nums[i] % 2 === 0){
            output.push(nums[i]);
        }
    }
    return output;
}
const isEven = (n) => n %2 ===0;
const evensOnly = numbers.filter(isEven);


// console.log(getEvens(numbers));
// console.log(evensOnly);


const whosAllowedToDrink = persons
.filter((person) => person.age >= 21)

console.log(whosAllowedToDrink);
const justNames = whosAllowedToDrink.map((p) => p.name);

console.log(justNames);



const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"]

//map()

// const newAnimals = animals.map(function(animalElemenet){
//     return animalElemenet + " is cool";
//     } );

const newAnimalsArrow = animals.map( (animalElemenet) =>{
    return animalElemenet + " is cool";
} );

const moreAnimals = animals.map( (animal, idx) => {
    return `${idx+1} - ${animal} is very cool`;
} )

console.log(newAnimalsArrow)
console.log(moreAnimals)

// -- filter
const filteredAnimals = animals.filter( (eachOneElement, index) => {
    if(eachOneElement.length <= 5){
        return true;
    } else{
        return false;
    }
} )

const filteredAnimals2 = animals.filter( (a) => {
    return a.length <= 5;
} )



console.log(filteredAnimals);
console.log(filteredAnimals2);

// ------------
const people = [
    {name: "bob", age:30},
    {name: "mary", age:31},
    {name: "sue", age:28},
    {name: "george", age:38}
];

// filter people with age >= 30

const peopleOver30 = people.filter( (p) => {
    if (p.age >= 30) {
        return true;
    } else{
        return false;
    }
} );

const people30 = people.filter( (p) => {
    return p.age >= 30;
}).map( (elem) => {
    elem.age++;
    return `${elem.name} is ${elem.age} old`;
})

console.log(peopleOver30)
console.log(people30)