// ACTIVITY 3
// Highest Exam Score Finder
// SMK Telkom Malang's teacher wants to quickly find the highest score among a class's exam results, which are stored in an array, without sorting the whole list.
// YOUR TASK
// Create a Flowgorithm program that stores 5 exam scores in an array and uses a loop to find and display the highest score.

const score= [78,92,85,67,90]

const highscore = score.reduce((max, current) => current > max ? current : max, score[0]);

console.log(score)
console.log("Skor tertinggi:", highscore); 