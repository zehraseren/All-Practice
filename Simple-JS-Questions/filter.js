const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
},
{
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
}];

/*

Q1. Using the array above, use the filter() method to retrieve the person whose age is greater than 30.
Q2. Fetch the person who knows JavaScript with the filter() method using the array above.

*/

/* A1. */
const age30 = person.filter(person => person.age > 30);
console.log(age30);

/* A2. */
const isKnownJS = person.filter(person => person.languages.includes("JavaScript"));
console.log(isKnownJS);