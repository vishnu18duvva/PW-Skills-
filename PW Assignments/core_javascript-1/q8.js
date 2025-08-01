//sum from 1 to N using do while loop

let n = 5; // Change this value to calculate sum up to a different number
let sum = 0;    
let i = 1;

do {
    sum = sum + i;
    i++;
}while (i <= n);

console.log("Sum from 1 to " + n + " is: " + sum);