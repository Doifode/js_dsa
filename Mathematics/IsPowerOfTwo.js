/*
Problem - Give a positive integer 'n', determine if the number is a power of 2 or not An integer is a power of two if there exists an integer 'x' such that n ===2^x
*/

function isPowerOfTwo(number) {
    if (number < 1) {
        return true
    }

    while (number > 1) {
        if (number % 2 !== 0) {
            return false
        }
        number = number % 2
    }
    return true
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(4))
console.log(isPowerOfTwo(5))

// Big-O = O(log) Input size is reducing by half for every iteration