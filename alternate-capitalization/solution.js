function capitalize(s){
  let results = [];
  let s2 = s;
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      s = s[0].toUpperCase() + s.slice(1);
    } else if (i % 2 === 0) {
      s = s.slice(0, i) + s[i].toUpperCase() + s.slice(i + 1);
    } else if (i % 2 === 1) {
      s2 = s2.slice(0, i) + s2[i].toUpperCase() + s2.slice(i + 1);
    }
  }
  results.push(s, s2);
  return results;
}