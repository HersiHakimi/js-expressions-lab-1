//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

// Fahrenheit days (already in F)
day1TempF = 32;  day3TempF = 70;  day5TempF = 80;  day7TempF = 72;  day9TempF = 68;
day11TempF = 75; day13TempF = 82; day15TempF = 65; day17TempF = 77; day19TempF = 78;
day21TempF = 73; day23TempF = 79; day25TempF = 71; day27TempF = 74; day29TempF = 76;

// Celsius days (already in C)
day2TempC = 25;  day4TempC = 18;  day6TempC = 15;  day8TempC = 28;  day10TempC = 20;
day12TempC = 23; day14TempC = 30; day16TempC = 22; day18TempC = 26; day20TempC = 24;
day22TempC = 21; day24TempC = 27; day26TempC = 19; day28TempC = 17; day30TempC = 29;

// Convert Celsius days to Fahrenheit
day2TempF = (day2TempC * 9 / 5) + 32;   day4TempF = (day4TempC * 9 / 5) + 32;
day6TempF = (day6TempC * 9 / 5) + 32;   day8TempF = (day8TempC * 9 / 5) + 32;
day10TempF = (day10TempC * 9 / 5) + 32; day12TempF = (day12TempC * 9 / 5) + 32;
day14TempF = (day14TempC * 9 / 5) + 32; day16TempF = (day16TempC * 9 / 5) + 32;
day18TempF = (day18TempC * 9 / 5) + 32; day20TempF = (day20TempC * 9 / 5) + 32;
day22TempF = (day22TempC * 9 / 5) + 32; day24TempF = (day24TempC * 9 / 5) + 32;
day26TempF = (day26TempC * 9 / 5) + 32; day28TempF = (day28TempC * 9 / 5) + 32;
day30TempF = (day30TempC * 9 / 5) + 32;

//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

tot_temperature_in_fahrenheit =
  day1TempF + day2TempF + day3TempF + day4TempF + day5TempF +
  day6TempF + day7TempF + day8TempF + day9TempF + day10TempF +
  day11TempF + day12TempF + day13TempF + day14TempF + day15TempF +
  day16TempF + day17TempF + day18TempF + day19TempF + day20TempF +
  day21TempF + day22TempF + day23TempF + day24TempF + day25TempF +
  day26TempF + day27TempF + day28TempF + day29TempF + day30TempF;

// Convert Fahrenheit days to Celsius
day1TempC = (day1TempF - 32) * 5 / 9;   day3TempC = (day3TempF - 32) * 5 / 9;
day5TempC = (day5TempF - 32) * 5 / 9;   day7TempC = (day7TempF - 32) * 5 / 9;
day9TempC = (day9TempF - 32) * 5 / 9;   day11TempC = (day11TempF - 32) * 5 / 9;
day13TempC = (day13TempF - 32) * 5 / 9; day15TempC = (day15TempF - 32) * 5 / 9;
day17TempC = (day17TempF - 32) * 5 / 9; day19TempC = (day19TempF - 32) * 5 / 9;
day21TempC = (day21TempF - 32) * 5 / 9; day23TempC = (day23TempF - 32) * 5 / 9;
day25TempC = (day25TempF - 32) * 5 / 9; day27TempC = (day27TempF - 32) * 5 / 9;
day29TempC = (day29TempF - 32) * 5 / 9;

tot_temperature_in_celsius =
  day1TempC + day2TempC + day3TempC + day4TempC + day5TempC +
  day6TempC + day7TempC + day8TempC + day9TempC + day10TempC +
  day11TempC + day12TempC + day13TempC + day14TempC + day15TempC +
  day16TempC + day17TempC + day18TempC + day19TempC + day20TempC +
  day21TempC + day22TempC + day23TempC + day24TempC + day25TempC +
  day26TempC + day27TempC + day28TempC + day29TempC + day30TempC;

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

//! Console.log the results for your own inspection if you'd like

console.log("Total F:", tot_temperature_in_fahrenheit);
console.log("Total C:", tot_temperature_in_celsius);
console.log("Avg F:", avg_temperature_in_fahrenheit);
console.log("Avg C:", avg_temperature_in_celsius);

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};