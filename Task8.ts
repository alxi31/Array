// ACTIVITY 8
// Score Ranking
// Math Club wants to rank a set of quiz scores from lowest to highest to prepare a ranking board, using a sorting algorithm instead of manually rearranging the numbers by hand.
// YOUR TASK
// Create a Flowgorithm program that stores 5 scores in an array and uses a Bubble Sort algorithm (a loop inside another loop that compares and swaps neighboring elements) to sort the scores from lowest to highest, then displays the sorted array.

// Activity 8 - Score Ranking (Bubble Sort, lowest to highest)

const scores: number[] = [85, 60, 92, 74, 68];

console.log("===== SCORE RANKING =====\n");
console.log(`Before sorting : ${scores.join(", ")}`);

// Bubble Sort: a loop inside another loop that compares and swaps neighbors
for (let i = 0; i < scores.length - 1; i++) {
  for (let j = 0; j < scores.length - 1 - i; j++) {
    if (scores[j] > scores[j + 1]) {
      const temp = scores[j];
      scores[j] = scores[j + 1];
      scores[j + 1] = temp;
    }
  }
}

console.log(`After sorting  : ${scores.join(", ")}`);

console.log("\nRanking board (lowest to highest):");
scores.forEach((score, i) => console.log(`${i + 1}. ${score}`));