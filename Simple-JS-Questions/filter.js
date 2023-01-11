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

const age30 = person.filter(person => person.age > 30);
console.log(age30);

const isKnownJS = person.filter(person => person.languages.includes("JavaScript"));
console.log(isKnownJS);