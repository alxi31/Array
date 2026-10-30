// ACTIVITY 9
// Sales Leaderboard
// Moklet Coffee wants to find both its best-performing and its least-performing staff member for the month, using two parallel arrays: one for the staff names and one for their total sales.
// YOUR TASK
// Create a Flowgorithm program that:
// •	stores the staff names and sales amounts in two parallel arrays
// •	uses a loop to find the index of the highest sales and the index of the lowest sales
// •	displays the top performer and the staff member with the lowest sales, along with their sales amounts


const staff: string[] = ["Rina", "Bayu", "Citra", "Dani", "Eka"];
const sales: number[] = [4500000, 6200000, 3800000, 5100000, 7300000];

const formatRp = (value: number): string => "Rp" + value.toLocaleString("en-US");


const maxIndex: number = sales.reduce(
  (best, value, i) => (value > sales[best] ? i : best),
  0
);
const minIndex: number = sales.reduce(
  (best, value, i) => (value < sales[best] ? i : best),
  0
);

const width = Math.max(...staff.map((n) => n.length));

console.log("===== SALES LEADERBOARD =====\n");
staff.forEach((name, i) => {
  console.log(`${name.padEnd(width)} : ${formatRp(sales[i])}`);
});

console.log(`\nTop Performer : ${staff[maxIndex]} (${formatRp(sales[maxIndex])})`);
console.log(`Lowest Sales  : ${staff[minIndex]} (${formatRp(sales[minIndex])})`);
