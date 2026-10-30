// ACTIVITY 6
// Passing Grade Counter
// A teacher at SMK Telkom Malang wants to know how many students in the class passed the exam. The passing score is 75. All the students' scores are stored in an array.
// YOUR TASK
// Create a Flowgorithm program that stores 7 scores in an array, uses a loop combined with a condition to count how many scores are 75 or above, then displays the total number of students who passed.


const scores: number[] = [80, 65, 90, 75, 55, 70, 85];
const passingScore: number = 75;

console.log("===== PASSING GRADE COUNTER =====\n");
console.log("Scores:");
scores.forEach((score, i) => {
  const status = score >= passingScore ? "PASS" : "FAIL";
  console.log(`Student ${i + 1} : ${score} (${status})`);
});

const passed: number[] = scores.filter((score) => score >= passingScore);

console.log(`\nPassing score : ${passingScore}`);
console.log(`Total passed  : ${passed.length} of ${scores.length} students`);