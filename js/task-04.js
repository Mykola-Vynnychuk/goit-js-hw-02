const buttonTaskFour = document.getElementById('task-four');
buttonTaskFour.addEventListener('click', () => {
  const formatString = function (string) {
    let arraySymbols = string.split('');

    if (arraySymbols.length > 40) {
      arraySymbols = arraySymbols.slice(0, 40);
      arraySymbols.push('...');
    }
    return arraySymbols.join('');
  };

  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // повернеться оригінальний рядок

  console.log(
    formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'),
  );
  // повернеться форматований рядок

  console.log(formatString('Curabitur ligula sapien.'));
  // повернеться оригінальний рядок

  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
  // повернеться форматований рядок
});
