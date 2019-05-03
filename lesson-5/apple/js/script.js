let columns = document.querySelectorAll('.column'),
  adv = document.querySelector('.adv'),
  menu = document.querySelector('.menu'),
  menuItems = document.querySelectorAll('.menu-item'),
  newMenuItem = document.createElement('li'),
  title = document.querySelector('#title'),
  answers = document.querySelector('#prompt');

menu.insertBefore(menuItems[2], menuItems[1]);

menu.appendChild(newMenuItem);
newMenuItem.classList.add('menu-item');
newMenuItem.textContent = 'Пятый пункт';

let a = title.textContent;
title.textContent = a.slice(0, a.indexOf('технику')) + 'подлинную ' + a.slice(a.indexOf('технику'));

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

columns[1].removeChild(adv);

let ans;
while (ans == '' || ans == null) {
  ans = prompt("Какое у вас отношение к технике Apple?", "");
}

answers.textContent = ans;