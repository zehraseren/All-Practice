/*

Q1. Salary raise calculation; Let's have an array of workers' salaries. Let's create an array map that gives a 15% raise to those whose salaries are above 3000 TL and a 25% raise to those whose salaries are below 3000 TL.

*/

/* A1. */

const salary = [1100, 13000, 2500, 4500, 1500, 25000, 2000];
const raiseSalary = salary.map((e)=>{
    if (e > 3000)
        return e * 1.15;
    else
        return e * 1.25;
});

console.log(raiseSalary);