/* minimum coins required to reach given target */

function minCoins(arr, n, target){ 

     if (target == 0) return 0; 
     var res = Number.MAX_SAFE_INTEGER; 

     for (var i=0; i<n; i++){ 
       if (arr[i] <= target) 
       { 
           var newres = minCoins(arr, n, target-arr[i]); 
           if (newres != Number.MAX_SAFE_INTEGER && newres + 1 < res) 
              res = newres + 1; 
       } 
     } 
     
     return res; 
     
  }
