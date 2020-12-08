const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.



console.log( employees );

function employeeFunction(employees) {
  let totalBonusPercentageIn = 0;
  if(employees.employeeNumber.length === 4){
    totalBonusPercentageIn += .05;
  }
  //ratings
  if (employees.reviewRating === 3) {
    totalBonusPercentageIn += .04;
  }
  if (employees.reviewRating === 4) {
    totalBonusPercentageIn += .06;
  }
  if (employees.reviewRating === 5) {
    totalBonusPercentageIn += .1;
  }
  if(totalBonusPercentageIn > 0.13) {
    totalBonusPercentageIn = 0.13;
  }
  if (employees.annualSalary > 65000) {
    totalBonusPercentageIn -= .01;
  }
  if(totalBonusPercentageIn < 0 ){
    totalBonusPercentageIn = 0;
  }
  return totalBonusPercentageIn.toFixed(2);
}

console.log(employeeFunction(employees[0]));
console.log(employeeFunction(employees[1]));
console.log(employeeFunction(employees[2]));
console.log(employeeFunction(employees[3]));
console.log(employeeFunction(employees[4]));