function findMul(arr, target){ //find the unique numbers that multiply to get the target
			var res = [];
			var newarr = [];
			for(var i=0; i<arr.length; i++){
				if(target%arr[i] == 0){
					var newnum = target/arr[i];
					if((arr.includes(newnum))&&(!newarr.includes(arr[i]))) {
						res.push([arr[i], newnum]);
						newarr.push(newnum);
					}
					newarr.push(arr[i]);
				}
			}
			return res;
}

	function toFindsum(arr, sum){ //all possible pairs of numbers summing up to the target
			var pairs = [];
			var numList = [];

			for(var i = 0; i < arr.length; i++){
				var curNum = arr[i];
				var diff = sum - curNum;
				if(numList.includes(diff)){
					//console.log(numList, 'bnl');
					pairs.push([curNum, diff]);
				}
				numList.push(curNum);
			}
			return pairs;
	}
