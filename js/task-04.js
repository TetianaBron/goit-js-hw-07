// Задание 4
// Счетчик состоит из спана и кнопок,
// которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const counterValue = document.querySelector('#value');

//const counter = document.querySelector('#counter');
const decrementBtn = document.querySelector('[data-action]');
console.log(decrementBtn);
const increment = document.querySelector('.increment');

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

decrementBtn.addEventListener('click', function () {
  counter.decrement();
  counterValue.textContent = counter.value;
});
