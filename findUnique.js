function findunique(arr){
    var res;
    for(var i=0; i<arr.length; i++){
      res = res ^ arr[i];
    }
    return res;
}
