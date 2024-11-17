// Problem Statement = Given a number n find the first n element of the fibonacci sequence.
// Explain = In the mathematics the fibonacci sequence is the sequence in which each number is the sum of the two precedings ones.
/*
fibonacci(2) == [0,1]
fibonacci(3) == [0,1,1]
fibonacci(7) == [0,1,1,2,3,5,8]
*/

const findFibonacci = (number) => {
    let fib = [0, 1]
    if (number <= 0 || number == 1) {
        return "Please give valid number";
    }
    if (number == 2) {
        return [0, 1]
    }
    for (let i = 2; i < number; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

console.log(findFibonacci(2))
console.log(findFibonacci(3))
console.log(findFibonacci(7))
console.log(findFibonacci(5))
// Big-O = O(n)