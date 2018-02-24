// This was a little tricky to find the right way to test if it was a number. I first tried isNan() and another one that I can't remember, but I think they counted the string-numbers as numbers too. 

function filter_list(l) {
  return l.filter(x => Number.isInteger(x));
}