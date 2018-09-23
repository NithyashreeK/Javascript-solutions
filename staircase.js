//how many steps does it take to get to the top of the staircase?
function staircase(n){
			var obj = {};
			if((n==0)||(n==1)){
				return 1;
			}
			obj[0] = 1; obj[1] = 1;
			for(var i=2; i<=n; i++){
				obj[i] = obj[i-1] + obj[i-2];
			}
			return obj[n];
}

		//function staircase(n){
		//	if((n==0) || (n==1)){
		//		return 1;
		//	} else {
		//		return staircase(n-1) + staircase(n-2);
		//	}
		//}
