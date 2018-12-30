/* Replace duplicates with letter followed by the number of duplicates */
function fixDup(arr){
  var obj = [];
  var res = [];
  for(var i=0; i<arr.length; i++){
    if(obj[arr[i]] == undefined){
      obj[arr[i]] = 1;
    }else{
      obj[arr[i]]++;
    }
  }

  for(var i=0; i<arr.length; i++){
    if(obj[arr[i]] > 1 && !res.includes(arr[i])){
      res += arr[i];
      res += obj[arr[i]];
    }else if(obj[arr[i]] == 1 && !res.includes(arr[i])){
      res += obj[arr[i]];
    }
  }
  return res;
}
