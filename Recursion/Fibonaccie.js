/**
 * Function to calculate the Nth Fibonacci number using recursion.
 * The Fibonacci sequence is defined as:
 * - F(0) = 0
 * - F(1) = 1
 * - F(n) = F(n-1) + F(n-2) for n > 1
 *
 * @param {number} n - The position in the Fibonacci sequence (0-based index).
 * @returns {number} - The Nth Fibonacci number.
 */

function fibonacci(n) {
    // Base case 1: If n is 0, the Fibonacci number is 0.
    if (n <= 0) {
        return 0;
    }

    // Base case 2: If n is 1, the Fibonacci number is 1.
    if (n === 1) {
        return 1;
    }

    // Recursive case: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example: Calculate the 6th Fibonacci number.
// Step-by-step execution for fibonacci(6):
// 1. fibonacci(6) -> fibonacci(5) + fibonacci(4)
// 2. fibonacci(5) -> fibonacci(4) + fibonacci(3)
// 3. fibonacci(4) -> fibonacci(3) + fibonacci(2)
// 4. fibonacci(3) -> fibonacci(2) + fibonacci(1)
// 5. fibonacci(2) -> fibonacci(1) + fibonacci(0)
// 6. Base cases:
//    - fibonacci(1) = 1
//    - fibonacci(0) = 0
// 7. Start summing back up:
//    - fibonacci(2) = 1 + 0 = 1
//    - fibonacci(3) = 1 + 1 = 2
//    - fibonacci(4) = 2 + 1 = 3
//    - fibonacci(5) = 3 + 2 = 5
//    - fibonacci(6) = 5 + 3 = 8

// Calculate and print the 6th Fibonacci number
console.log(fibonacci(6)); // Output: 8
