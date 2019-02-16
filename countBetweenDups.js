/*count the minimum number of elements between duplicates (including the duplicates) in an array
Examples: [5, 3, 4, 2, 3, 4, 5, 7] returns 4 (because of [3, 4, 2, 3] or [4, 2, 3, 4])
          [3, 6, 1, 7] returns -1
          [2, 2, 3, 4, 5, 4] returns 2
          [5, 3, 4, 2, 1, 3, 4, 5, 7] returns 5 (because of [3, 4, 2, 1, 3])
*/

function solution(coupons) {
  var obj = [];
  var count = -1;
  for(var i=0; i<coupons.length; i++){
    if(obj[coupons[i]] == undefined){
      obj[coupons[i]] = i;
    }else{
      if(count == -1 || i-obj[coupons[i]]+1 < count){
        count = i-obj[coupons[i]]+1;
      }
    }
  }
  return count;
}
