// I got this passing...but it doesn't feel like a good solution. I tried some different ways and refactoring but then it wouldn't pass. I'll maybe try again when I have time. 

function formatWords(words){
  for (let i in words) {
    if (words[i] === '') {
      words.splice(i, 1);
    }
  }
  if (words === null) {
    return '';
  }
  for (let i in words) {
    if (i == words.length - 2 && words[i] !== '') {
      words[i] = words[i] + ' and ';
    } else if (i < words.length - 1 && words[i] !== '') {
      words[i] = words[i] + ', ';
    }
  }
  return words.join('');
}