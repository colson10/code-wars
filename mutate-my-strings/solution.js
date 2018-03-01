function mutateMyStrings(stringOne, stringTwo){
  let results = [stringOne];
  let arrayOne = stringOne.split('');
  let arrayTwo = stringTwo.split('');
  for (let i in arrayOne) {
    if (arrayOne[i] !== arrayTwo[i]) {
      arrayOne[i] = arrayTwo[i];
      results.push(arrayOne.join(''));
    }
  }
  return results.join('\n') + '\n';
}