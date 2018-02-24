function find_average(array) {
  let counter = 0;
  let ave = array.reduce((accumulator, currentValue) => {
    counter++;
    return accumulator += currentValue;
  }, 0);
  return ave/counter;
}

// I looked at the solutions after solving it and saw the use of array.length in place of the counter which was cool. 

function find_average(array) {
  let ave = array.reduce((accumulator, currentValue) => {
    return accumulator += currentValue;
  }, 0);
  return ave/array.length;
}