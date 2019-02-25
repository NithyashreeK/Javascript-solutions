/*  given an array with distinct numbers between 1 to 100, return a string of the number's range not present in the given array
Input: [50, 75] 
Output: 0-49,51-74,76-100
*/

function findNums(arr){
    var num0 = 0;
    var res = [];
    var i = 0;
    while(i < arr.length){
        var num = arr[i] - 1;
        var temp = num0 +'-'+ num;
        res.push(temp);
        i++;
        num0 = num+2;
    }

    if(arr[arr.length-1] < 100){
        var temp = num0 +'-'+ 100;
        res.push(temp);
    }
    return res.toString();
}
