// ACTIVITY 7
// Reverse Order Printer
// Moklet Coding Club wants to display its member registration queue in reverse order (the most-recently registered member shown first), without changing the order of the original array.
// YOUR TASK
// Create a Flowgorithm program that stores 4 names in an array, then uses a loop that starts from the last index down to the first index to print the names in reverse order.

const names: string[] = ["Rani", "Dimas", "Salsa", "Fajar"];

console.log("===== REVERSE ORDER PRINTER =====\n");

console.log("Registration order (original):");
names.forEach((name, i) => console.log(`${i + 1}. ${name}`));

const reversed: string[] = names.slice().reverse();

console.log("\nMost recent first (reversed):");
reversed.forEach((name, i) => console.log(`${i + 1}. ${name}`));

console.log(`\nOriginal array is unchanged : ${names.join(", ")}`);