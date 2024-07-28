// src/util/sqrt.ts

export type Sqrt = (number: number, guess: number, tolerance?: number, iterationLimit?: number, iteration?: number) => number;

export const sqrt: Sqrt = (number, guess, tolerance = 0.001, iterationLimit = 100, iteration = 0) => {
  if (iteration > iterationLimit) return guess;
  const newGuess = (guess + number / guess) / 2;
  if (Math.abs(newGuess - guess) < tolerance) return newGuess;
  return sqrt(number, newGuess, tolerance, iterationLimit, iteration + 1);
};
