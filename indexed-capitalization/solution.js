function capitalize(s,arr){
  for (let i in arr) {
    s = s.slice(0, arr[i]) + s.charAt(arr[i]).toUpperCase() + s.slice(arr[i] + 1, s.length);
  }
  return s;
}


function capitalize(s,arr){
  let sArr = s.split('');
  arr.map(ele => {
    if (ele < sArr.length) sArr[ele] = sArr[ele].toUpperCase();
  });
  return sArr.join('');
}