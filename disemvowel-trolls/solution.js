// Using regex. 

function disemvowel(str) {
  return str.replace(/[aeiou]/ig, '');
}

// Solving without regex and only the split/join methods. 

function disemvowel(str) {
  let vowelArray = 'aeiouAEIOU'.split('');
  let myArray = str.split('');
  for (let i in myArray) {
    for (let j in vowelArray) {
      if (vowelArray[j] === myArray[i]) {
        myArray[i] = '';
      }
    }
  }
  return myArray.join('');
}