/*
Problem = Give a natural number 'n', Determine if the number is prime or not.
A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
isPrime(5) true (1*5 or 5*1)
isPrime(4) false (1*4 or 2*2 of 4*1)
*/

const isPrime = (number) => {

    if (number < 2) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

console.log(`is 4 prime number = ${isPrime(4)}`)
console.log(`is 5 prime number = ${isPrime(5)}`)
console.log(`is 97 prime number = ${isPrime(97)}`)
console.log(`is 101 prime number = ${isPrime(101)}`)
console.log(`is 2 prime number = ${isPrime(2)}`)

//Big O = O(sqrt(n)) Linear TC