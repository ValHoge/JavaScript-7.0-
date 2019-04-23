'use strict';

let money = prompt('Ваш бюджет?','');
let time = prompt('Введите дату в формате YYYY-MM-DD','');
let с1 = prompt('Введите обязательную статью расходов в этом месяцу', '');
let h1 = +prompt('Во сколько обойдется?', '');
let с2 = prompt('Введите обязательную статью расходов в этом месяцу', '');
let h2 = +prompt('Во сколько обойдется?', '');

let appData = {
  budget : money,
  timeData: time,
  expenses: {},
  optionalExpenses : '',
  income : '',
  savings : false
 };

appData.money = money;
appData.time = time;
appData.expenses.c1 = h1;
appData.expenses.c2 = h2;

let budgetOfOneDay = money / 30;
alert(budgetOfOneDay)

console.log(money);
console.log(time);
console.log(budgetOfOneDay);