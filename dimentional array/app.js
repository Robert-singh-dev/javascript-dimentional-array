// Dimentional array

const earnMoneyA = ["FrontEnd", "Backend", "fullstack"];
const earnMoneyB = ["AI", "ML", "Blockchain"];

const growMoneyA = ["Stocks", "Realestate", "FixedIncome"];
const growMoneyB = ["options", "Futures"];

const giveMoney = ["QualityEducation"];

// get array values individually
console.log(earnMoneyA[0], growMoneyB[1]);

// get element with two dimentional array

const earnMoney = [earnMoneyA, earnMoneyB];
console.log(earnMoney);
const growMoney = [growMoneyA, growMoneyB];

console.log(earnMoney[0][0], growMoney[1][0]);

// get element with three dimentioal array

const dhuddu = [earnMoney, growMoney, giveMoney];

console.log(dhuddu[0][0][2]);
console.log(dhuddu[0][1][0], dhuddu[1][0][2]);
