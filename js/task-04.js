const buttonTaskFour = document.getElementById('task-four');
buttonTaskFour.addEventListener('click', () => {
  const formatString = function (string) {
    // let arraySymbols = string.split('');

    if (string.length > 40) {
      string = string.slice(0, 40) + "...";
    }
    return string;
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
