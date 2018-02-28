function high(x){
  let total = 0;
  let counter = 0;
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let newArray = x.split(' ');
  let results = [];
  for (let i in newArray) {
    for (let j in newArray[i]) {
      total += alpha.indexOf(newArray[i][j]) + 1;
    }
    if (total > counter) {
      counter = total;
      results[0] = newArray[i];
    }
    total = 0;
  }
  if (results.length === 0) {
    return '';
  }
  return results[0];
}