const log = (msg) => {console.log(msg);};

let startBtn = document.querySelector('#start'),
  budgetValue = document.querySelector('.budget-value'),
  dayBudgetValue = document.querySelector('.daybudget-value'),
  levelValue = document.querySelector('.level-value'),
  expensesValue = document.querySelector('.expenses-value'),
  optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
  incomeValue = document.querySelector('.income-value'),
  monthSavingsValue = document.querySelector('.monthsavings-value'),
  yearSavingsValue = document.querySelector('.yearsavings-value'),
  expensesInputs = document.querySelectorAll('input.expenses-item'),
  expensesBtn = document.querySelectorAll('button')[0],
  optExpensesBtn = document.querySelectorAll('button')[1],
  countBtn = document.querySelectorAll('button')[2],
  optExpensesInputs = document.querySelectorAll('.optionalexpenses-item'),
  incomeInput = document.querySelector('#income'),
  savingsCheckbox = document.querySelector('input[type="checkbox"]'),
  sumInput = document.querySelector('#sum'),
  percentInput = document.querySelector('#percent'),
  yearInput = document.querySelector('.year input'),
  monthInput = document.querySelector('.month input'),
  dayInput = document.querySelector('.day input'),
  allInputs = document.querySelectorAll('input');

let money, time;

let  appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
}; 

expensesBtn.disabled = true;
optExpensesBtn.disabled = true;
countBtn.disabled = true;


allInputs.forEach(function(item) {
  item.disabled = true;
});

expensesInputs.forEach(function(item, i, array) {
  
  item.addEventListener('input', function() {

    if ((array[0].value != "" && array[1].value != "") 
    || (array[2].value != "" && array[3].value != "")) {

      expensesBtn.disabled = false;
    } else {

      expensesBtn.disabled = true;
    }
  });
});

optExpensesInputs.forEach(function(item) {
  
  item.addEventListener('input', function() {

    if ((item.value != "")) {

      optExpensesBtn.disabled = false;
    } else {

      optExpensesBtn.disabled = true;
    }
  });
});


startBtn.addEventListener('click', function() {

  while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
  while(time == "" || time == null) {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
  }

  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money;
  yearInput.value = new Date(Date.parse(time)).getFullYear();
  monthInput.value = new Date(Date.parse(time)).getMonth() + 1;
  dayInput.value = new Date(Date.parse(time)).getDate();
  countBtn.disabled = false;
  allInputs.forEach(function(item) {
    item.disabled = false;
  });
  sumInput.disabled = true;
  percentInput.disabled = true;
});

expensesBtn.addEventListener('click', function() {

  let sum = 0;

  for (let i = 0; i < expensesInputs.length; i++) {
    let a = expensesInputs[i].value,
      b = expensesInputs[++i].value;
    
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
      appData.expenses[a] = b;
      sum += +b;
    } 
  }
  expensesValue.textContent = sum;
});

optExpensesBtn.addEventListener('click', function() {
  optionalExpensesValue.textContent = "";
  
  for (let i = 0; i < optExpensesInputs.length; i++) {
    let a = optExpensesInputs[i].value;

    if (typeof(a) === 'string' && typeof(a) != null && a != '' && a.length < 50) {
      appData.optionalExpenses[i+1] = a;
      optionalExpensesValue.textContent += a + " "; 
    } 
  }
});

countBtn.addEventListener('click', function() {

  if (expensesValue.textContent != "") {

    appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;
  
    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Уровень достатка меньше минимума";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 500) {
      levelValue.textContent = "Уровень достатка минимальный";
    } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 1000) {
      levelValue.textContent = "Уровень достатка средний";
    } else if (appData.moneyPerDay > 1000) {
      levelValue.textContent = "Уровень достатка хороший";
    } else {
      levelValue.textContent = "Что то пошло не так";
    }
  } else {
    dayBudgetValue.textContent = "Укажите обяз. расходы";

  }
  
});

incomeInput.addEventListener('input', function() {
  let items;
  while (items == null || items == '') {
    items = incomeInput.value;
  }
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
});

savingsCheckbox.addEventListener('click', function(){
  if (appData.savings == false) {
    appData.savings = true;
    sumInput.disabled = false;
    percentInput.disabled = false;
  } else {
    appData.savings = false;
    sumInput.disabled = true;
    percentInput.disabled = true;
  }
});

sumInput.addEventListener('input', function() {
  if (appData.savings == true) {

    let save = sumInput.value,
    percent = percentInput.value;

    appData.monthIncome = save/100/12*percent;
    appData.yearIncome = save/100*percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentInput.addEventListener('input', function() {
  if (appData.savings == true) {

    let save = sumInput.value,
    percent = percentInput.value;

    appData.monthIncome = save/100/12*percent;
    appData.yearIncome = save/100*percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});