function addOne(arr){
			var i = arr.length - 1;
			while(i >= 0){
				if(arr[i] != 9){
					arr[i]++;
					return arr;
				}else{
					arr[i] = 0;
					i--;
				}

			}
			if(arr[0] == 0){
				arr.unshift(1);
				return arr;
			}else{
				return arr;
			}
}
