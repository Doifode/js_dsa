/*
Problem = Give the integer 'n' find the factorial of that integer.
In mathematics, the factorial of a non-negative integer 'n', denoted n! is hte product of all positive integers less than or equal to 'n'.
Factorial of zero is 1.
factorial(4) = 4*3*2*1 = 24
factorial(5) = 5*4*3*2*1 = 120
*/

const findFactorial = (number) => {
    if (number == 1 || number == 0) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    return factorial
}
console.log(`Factorial of 4 is ${findFactorial(4)}`)
console.log(findFactorial(5))
console.log(findFactorial(7))
console.log(findFactorial(0))
console.log(findFactorial(1))

// Big O = O(n) linear