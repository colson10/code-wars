function validateUsr(username) {
  if (username.length === 0 || username.length < 4 || username.length > 16) {
    return false;
  }
  for (let i = 0; i < username.length; i++) {
    if (username[i] == ' ' || username[i] === '' || !username[i].match('[a-z0-9\_]')) {
      return false;
    }
  }
  return true;
}