function isNice(arr){
  if (arr.length === 0) {
    return false;
  }
  for (let i in arr) {
    if (!arr.includes(arr[i]+1) && !arr.includes(arr[i]-1)) {
      return false;
    }
  }
  return true;
}