type Sqrt = (number: number, guess: number, tolerance?: number, iterationLimit?: number, interation?: number) => number

// Description of Newton's method: 
// 1. Start with an initial guess
// 2. Update the guess by averaging it with the number divided by the guess
// 3. Repeat step 2 until the guess is within the tolerance
// 4. Return the guess

export const sqrt: Sqrt = (number, guess, tolerance = 1e-7, iterationLimit = 1000, iteration = 0) => {
    if(number < 0) {
        throw new Error('Cannot find the square root of a negative number')
    }

    if(iteration > iterationLimit) {
        throw new Error('Iteration limit reached')
    }

    // Complete the function

    
}

console.log(sqrt(4, 1)) // 2
console.log(sqrt(9, 1)) // 3
console.log(sqrt(16, 1)) // 4
console.log(sqrt(25, 1)) // 5
console.log(sqrt(-1, 1)) // Error: Cannot find the square root of a negative number
console.log(sqrt(4, 1, 1e-10, 1000, 1000)) // Error: Iteration limit reached
console.log(sqrt(2, 1)) // 1.414213562373095
console.log(sqrt(3, 1)) // 1.7320508075688772
console.log(sqrt(5, 1)) // 2.23606797749979