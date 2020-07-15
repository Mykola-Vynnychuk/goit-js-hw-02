const nullArrayReset = (array) => {
  const newArray = [];

  for(const argument of array) {
if(typeof argument === 'string' && argument !== ''){
newArray.push(argument);
}

  }
  return newArray;
};