// ACTIVITY 2
// Weekly Temperature Log
// Moklet Weather Station records the daily temperature for one school week. The recorded values are stored in an array and must be looped through to calculate the total and the average temperature.
// YOUR TASK
// Create a Flowgorithm program that:
// •	stores 7 daily temperatures in an array
// •	uses a For loop to display each day's temperature while accumulating the total
// •	calculates and displays the average temperature after the loop finishes

const tempDaily = [
    { Day: 1, temp: 29 },
    { Day: 2, temp: 27 },
    { Day: 3, temp: 28},
    { Day: 4, temp: 26},
    { Day: 5, temp: 22},
    { Day: 6, temp: 25},
    { Day: 7, temp: 30},
  ];

  let total = 0;

  for (const dailyRecord of tempDaily) {
    console.log(`Day ${dailyRecord.Day}: ${dailyRecord.temp}°C`);
    total += dailyRecord.temp;
  }

  const average = total / tempDaily.length;
  console.log(`Average temperature: ${average.toFixed(2)}°C`);