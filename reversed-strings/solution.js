// My first instinct was to do it with arrays:

function solution(str){
  let strA = str.split('');
  let bckwrds = [];
  for (let i = strA.length - 1; i >= 0; i--) {
    bckwrds.push(strA[i]);
  }
  return bckwrds.join('');
}

// Then I realized I can do it as strings too in the same way:

function solution(str){
  let bckwrds = '';
  for (let i = str.length - 1; i >= 0; i--) {
    bckwrds += str[i];
  }
  return bckwrds;
}