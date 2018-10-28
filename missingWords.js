function missingWords(s, t){
  s = s.split(' ');
  t = t.split(' ');
  var res = [];
  var j = 0;
  var temp;
  for(var i=0; i<s.length; i++){
    while(j < t.length){
      if(s[i] != t[j]){
        res.push(s[i]);
        break;
      }else{
        j++;
        break;
      }
    }
    if((j == t.length) && (s[i] != t[j-1])){
      temp = i;
    }
  }
  while(temp < s.length){
    res.push(s[temp]);
    temp++;
  }
  return res;
}
