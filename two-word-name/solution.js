function abbrevName(name){
  let myArray = name.split(' ');
  let a = myArray[0].charAt(0).toUpperCase();
  let b = myArray[1].charAt(0).toUpperCase();
  return a + '.' + b;
}