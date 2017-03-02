;(function () {
  'use strict';
  window.onload = function () {

    class Calculator {
      constructor(options) {
        this._el = options.el;
        this._result = this._el.querySelector('.result');
        this._total = null;
        this._output;

        this._el.addEventListener('click', this._onButtonNumberClick.bind(this), true);
        this._el.addEventListener('click', this._onButtonDeleteClick.bind(this), true);
        this._el.addEventListener('click', this._onbuttonPeriodClick.bind(this), true);
        this._el.addEventListener('click', this._onButtonOperatorClick.bind(this), true);
        this._el.addEventListener('click', this._onButtonEqualsClick.bind(this), true);
      }

      _onButtonNumberClick(event) { /* Add numbers to screen */
        if (!event.target.classList.contains('num')) {
          return;
        }

        if (this._total === null) {
          this._total = event.target.value;
        }else {
          this._total += event.target.value;
        }

        console.log('1:' + this._total);

        this._result.innerHTML += event.target.value;
      }

      _onButtonDeleteClick(event) { /* Delete all numbers from screen */
        if (!event.target.classList.contains('delete')) {
          return;
        }

        this._result.innerHTML = '';
        this._total = '';
      }

      _onbuttonPeriodClick(event) { /* Period add to screen */
        if (!event.target.classList.contains('period')) {
          return;
        }

        if (this._result.innerHTML === '') {
          this._total += event.target.value;
          this._result.innerHTML += event.target.value.concat('');
        }else {
          this._total += event.target.value;
          this._result.innerHTML += event.target.value.concat('');
        }
      }

      _onButtonOperatorClick(event) { /* Operator add to screen */
        if (!event.target.classList.contains('operator')) {
          return;
        }

        this._total += event.target.value;

        console.log('2:' + this._total);

        this._result.innerHTML += event.target.value;
      }

      _onButtonEqualsClick(event) {
        if (!event.target.classList.contains('eqn')) {
          return;
        }

        console.log('3:' + this._result);
        console.log(this._total);
        this._result.innerHTML = eval(this._total);
      }

    }

    let calculator = new Calculator({
      el: document.querySelector('.calculator'),
    });
  };
})();
