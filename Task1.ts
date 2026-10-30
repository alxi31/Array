// ACTIVITY 1
// Fruit Stock List Printer
// Moklet Canteen wants to display its fruit stock list, one item per line together with its position number, using a single array to store all the fruit names instead of a separate variable for each one.
// YOUR TASK
// Create a Flowgorithm program that stores 5 fruit names in an array, then uses a For loop to print each fruit together with its index position number


const fruit = ["Apple", "Banana", "Grape", "watermelon", "mango"]

for (let fruitList = 0; fruitList < fruit.length; fruitList++)  {
    console.log(`index#${fruitList}: ${fruit[fruitList]}`)
}
