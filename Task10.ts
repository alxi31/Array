// ACTIVITY 10
// Exam Score Matrix
// SMK Telkom Malang wants a complete exam report using a 2D array. Each row represents one student, and each column represents one of their three exam scores. The system must calculate every student's total and average score.
// YOUR TASK
// Create a Flowgorithm program that:
// •	stores exam scores for 3 students x 3 exams in a 2D array
// •	uses a nested loop (an outer loop for each student, and an inner loop for each exam score) to calculate the total score for each student
// •	calculates each student's average score
// •	displays a report showing each student's scores, total, and average

const studentNames: string[] = ["Student 1", "Student 2", "Student 3"];
const scores: number[][] = [
  [80, 75, 90],
  [65, 70, 60],
  [95, 85, 90],
];

const totals: number[] = [];
const averages: number[] = [];

console.log("===== EXAM SCORE REPORT =====\n");

for (let i = 0; i < scores.length; i++) {          
  let total = 0;

  for (let j = 0; j < scores[i].length; j++) {     
    total += scores[i][j];
  }

  const average = total / scores[i].length;

  totals.push(total);
  averages.push(average);

  console.log(studentNames[i]);
  console.log(`  Scores  : ${scores[i].join(", ")}`);
  console.log(`  Total   : ${total}`);
  console.log(`  Average : ${average.toFixed(2)}\n`);
}

const bestIndex: number = totals.indexOf(Math.max(...totals));
console.log(`Highest total : ${studentNames[bestIndex]} (${totals[bestIndex]})`);
