// Doesn't feel like an elegant solution but I don't have time at the moment to refactor. 

function cubeOdd(arr) {
  for (let i in arr) {
    if (!Number.isInteger(arr[i]) || arr.length === 0) return undefined;
  }
  let newArray = [];
  let cubed;
  arr.map(ele => {
    cubed = ele * ele * ele;
    if (cubed % 2 === 1 || cubed % 2 === -1) newArray.push(cubed);
  });
  if (newArray.length === 0) {
    return 0;
  }
  return newArray.reduce((a, b) => a + b);
}