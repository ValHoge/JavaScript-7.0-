'use strict';

let money = +prompt('Ваш бюджет?','');
let time = prompt('Введите дату в формате YYYY-MM-DD','');

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses : '',
  income : '',
  timeData: time,
  savings : false
 };


// for (let i = 0; i<2; i++) {
//   let a = prompt('Введите обязательную статью расходов в этом месяцу', '');
//   let b = +prompt('Во сколько обойдется?', '');
  
  
//   if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//     console.log("done");
//     appData.expenses[a] = b;  
//   } else {   
//       i--;
//   }
// };

appData.moneyPerDay = money / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {
//     console.log('Минимальный уровень достатка');
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log('Средний уровень достатка');
// } else if (console.log > 2000) {
//     console.log('Высокий уровень достатка');
// } else {
//     console.log('Произошла ошибка');
// }
  
// switch (appData.moneyPerDay) {
//   case appData.moneyPerDay < 100:
//     console.log('Минимальный уровень достатка');
//     break;
//   case appData.moneyPerDay > 100 && appData.moneyPerDay < 2000:
//     console.log('Средний уровень достатка');
//     break;
//   case appData.moneyPerDay > 2000:
//     console.log('Высокий уровень достатка');
//     break;
//   default:
//   console.log('Поле было не заполнено');
//     break; 
//   }
let i = 0;
// while (i < 2) {
//        let a = prompt('Введите обязательную статью расходов в этом месяцу', '');
//        let b = +prompt('Во сколько обойдется?', '');


//        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//          console.log("done");
//          appData.expenses[a] = b;
//        } else {
//          i--;
//        }
//        i++;
//   };

do {
  let a = prompt('Введите обязательную статью расходов в этом месяцу', '');
  let b = +prompt('Во сколько обойдется?', '');


  if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
  } else {
    i--;
  }
  i++;
}
while(i < 2);