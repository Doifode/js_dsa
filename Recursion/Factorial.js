/*
Problem:
- Given an integer 'n', find the factorial of that integer.
- In mathematics, the factorial of a non-negative integer 'n', denoted as n!, is the product of all positive integers less than or equal to 'n'.
- Factorial of zero is 1 (0! = 1).

Examples:
- factorial(4) = 4 * 3 * 2 * 1 = 24
- factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

Approach:
- Use recursion to calculate the factorial.
- Base Case: If the number is 0, return 1 (factorial of 0 is defined as 1).
- Recursive Case: Multiply the current number by the factorial of the number minus one.

Time Complexity:
- Big O = O(n) (linear):
  - The function makes a single recursive call for every number from 'n' down to 1.
  - As 'n' grows, the number of recursive calls grows linearly.
*/

const findFactorial = (number) => {
    // Base Case: If the input number is 0, return 1.
    if (number === 0) {
        return 1;
    }
    // Recursive Case: Multiply the current number by the factorial of (number - 1).
    return number * findFactorial(number - 1);
};

// Example usage: Calculate and print the factorial of 4.
console.log(`Factorial of 4 is ${findFactorial(4)}`);

/*
Step-by-Step Execution for findFactorial(4):
1. findFactorial(4) = 4 * findFactorial(3)
2. findFactorial(3) = 3 * findFactorial(2)
3. findFactorial(2) = 2 * findFactorial(1)
4. findFactorial(1) = 1 * findFactorial(0)
5. findFactorial(0) = 1 (base case)
6. Start summing back up:
   - findFactorial(1) = 1 * 1 = 1
   - findFactorial(2) = 2 * 1 = 2
   - findFactorial(3) = 3 * 2 = 6
   - findFactorial(4) = 4 * 6 = 24

Output:
Factorial of 4 is 24
*/

/*
Time Complexity Explanation (Big O = O(n)):
- The recursion tree has 'n' levels, as we make one recursive call for each number from 'n' down to 0.
- At each level, there is a constant amount of work: a single multiplication and a function call.
- Therefore, the overall time complexity is proportional to 'n'.

Space Complexity:
- Each recursive call adds a frame to the call stack.
- The maximum depth of the recursion stack is 'n'.
- Space complexity is O(n).
*/
