const buttonTaskOne = document.getElementById('task-one');
buttonTaskOne.addEventListener('click', () => {
  const logItems = function (array) {
    for (const item of array) {
      const numberItem = array.indexOf(item) + 1;
      console.log(`${numberItem} - ${item}\n`);
    }
    console.log('\n');
  };

  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
});
