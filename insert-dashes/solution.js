function insertDash(num) {
  oddArray = ['1', '3', '5', '7', '9'];
  allArray = num.toString().split('');
  for (var i = 0; i < allArray.length; i++) {
    if (oddArray.includes(allArray[i])) {
      if (oddArray.includes(allArray[i-1])) {
        allArray.splice([i], 0, '-');
      }
    }
  }
  return allArray.join('');
}