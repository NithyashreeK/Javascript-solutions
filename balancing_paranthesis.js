function balanedP(str){
  var opening = ['{', '(', '['];
  var closing = ['}', ')', ']'];
  var res = [];
  for(var i=0; i<str.length; i++){
    if(opening.includes(str[i])){
      res.push(str[i]);
    }
    if(closing.includes(str[i]) && (res.pop() != opening[closing.indexOf(str[i])])){
      return false;
    }
  }
  if(res.length != 0){
    return false;
  }
  return true;
}
