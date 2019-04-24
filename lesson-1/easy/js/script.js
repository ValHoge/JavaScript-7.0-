'use strict';

let money = prompt('Ваш бюджет?','');
let time = prompt('Введите дату в формате YYYY-MM-DD','');
let question1 = prompt('Введите обязательную статью расходов в этом месяцу', '');
let answer1 = +prompt('Во сколько обойдется?', '');
let question2 = prompt('Введите обязательную статью расходов в этом месяцу', '');
let answer2 = +prompt('Во сколько обойдется?', '');

let appData = {
  
  expenses: {},
  optionalExpenses : '',
  income : '',
  savings : false
 };

appData.money = money;
appData.time = time;
appData.expenses[question1] = answer1;
appData.expenses[question2] = answer2;

let budgetOfOneDay = money / 30;
alert(budgetOfOneDay)

console.log(money);
console.log(time);
console.log(budgetOfOneDay);