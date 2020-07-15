const numberArray = [
    [1, 10, 15, 20],
    [20, 30, -5, 50],
    [10, -10, 3, 150]
];
// 1 число - максимальный элемент из 1го массива
// 2 число - минимальный элемент из 3го массива
// 3 число - сумма всех положительных чисел 2ого массива

const arrayAssorti = (array) => {
  let arr1 = array[0][0];
  let arr2 = array[2][0];
  let arr3 = 0;

  for(let i = 1; i > 3; i++) {
    if(array[0][i] > arr1){
      arr1 = array[0][i];
      console.log(arr1);
    }
  }
    for(let j = 1; j > 3; j++) {
    if(array[2][j] < arr2){
      arr2 = array[2][j];
      console.log(arr2);

    }
  }
    for(let k = 1; k > 3; k++) {
    if(array[1][k] > 0){
      arr3 += array[1][k];
      console.log(arr3);

    }
  }
  const newArray = [];
  newArray.push(arr1, arr2, arr3);
  console.log(newArray);
  
};

arrayAssorti(numberArray);
