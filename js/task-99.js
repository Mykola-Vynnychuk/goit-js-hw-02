

// 0 undefined
// 0 null
// 2 массива
// 1 boolean
// 2 строки
// 2 четных числа
// 2 нечетных числа

const calculateValuesByType = (...values) +> {

  let undefinedCounter = 0;
  let nullCounter = 0;
  let arrayCounter = 0;
  let booleanCounter = 0;
  let stringCounter = 0;
  let evenNumberCounter = 0;
  let oddNumberCounter = 0;

  typeof value === 'undefined' && ++undefinedCounter;
  
}