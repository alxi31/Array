// ACTIVITY 5
// Student Name Search
// Moklet Library's kiosk lets a staff member check whether a student's name is already registered in the member array before issuing a new library card.
// YOUR TASK
// Create a Flowgorithm program that stores 5 member names in an array, uses a loop combined with a condition to search for a name typed by the user, and displays whether the name was FOUND (with its index) or NOT FOUND.

const members: string[] = ["Andi", "Budi", "Citra", "Dewi", "Eko"];
const searchName: string = "Citra";

console.log("===== STUDENT NAME SEARCH =====\n");
console.log("Registered members:");
members.forEach((name, i) => console.log(`[${i}] ${name}`));

console.log(`\nSearching for : ${searchName}`);

const index: number = members.findIndex(
  (name) => name.toLowerCase() === searchName.toLowerCase()
);

if (index !== -1) {
  console.log(`Result : FOUND at index ${index}`);
} else {
  console.log("Result : NOT FOUND");
}