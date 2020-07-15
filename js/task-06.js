const buttonTaskSix = document.getElementById('task-six');
buttonTaskSix.addEventListener('click', () => {
  let input;
  const numbers = [];
  let total = 0;

  while (true) {
    let input = prompt('Введіть число');

    if (input === null) {
      break;
    }
    input = Number(input);
    const notANumber = Number.isNaN(input);

    if (notANumber) {
      alert('Було введено не число, cпробуйте ще раз');
      continue;
    }
    numbers.push(input);
  }

  if (numbers.length === 0) {
    alert('Не введено жодного числа');
  }

  for (const number of numbers) {
    total += number;
  }
  // console.log(total, numbers);
  alert(`Загальна сума чисел дорівнює ${total}`);
});
