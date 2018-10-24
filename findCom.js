/* Given prefix as one of the inputs, find the elements in the array which have prefix (in the same order) as their beginning */

function commonPrefix(arr, prefix){
    var res = [];
    for(var i=0; i<arr.length; i++){
      if(checkChar(arr[i], prefix)){
        res.push(arr[i]);
      }
    }
    return res;
  }

  function checkChar(str, prefix){
    for(var i=0; i<prefix.length; i++){
      if(str[i] != prefix[i]){
        return false;
      }
    }
    return true;
  }
