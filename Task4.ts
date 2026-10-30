// ACTIVITY 4
// Cheapest Item Finder
// Moklet Online Store wants to find the cheapest item among several products. Two parallel arrays are used: one array stores the product names, and another array stores their prices at the same index position.
// YOUR TASK
// Create a Flowgorithm program that:
// •	stores the product names and prices in two parallel arrays
// •	uses a loop to find the index of the lowest price
// •	displays the cheapest product's name together with its price


const names: string[] = ["Notebook", "Pen", "Eraser", "Ruler", "Pencil"];
const prices: number[] = [8000, 3000, 2500, 5000, 2000];

const formatRp = (value: number): string => "Rp" + value.toLocaleString("en-US");

const minIndex: number = prices.reduce(
  (best, price, i) => (price < prices[best] ? i : best),
  0
);

const width = Math.max(...names.map((n) => n.length));

console.log("===== CHEAPEST ITEM FINDER =====\n");
names.forEach((name, i) => {
  console.log(`${name.padEnd(width)} : ${formatRp(prices[i])}`);
});
console.log(`\nCheapest Item : ${names[minIndex]} (${formatRp(prices[minIndex])})`);