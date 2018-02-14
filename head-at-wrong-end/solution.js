function fixTheMeerkat(arr) {
  let newTail = arr[0];
  arr[0] = arr[2];
  arr[2] = newTail;
  return arr;
}