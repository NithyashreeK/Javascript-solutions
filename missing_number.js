function missingNumber(nums) {
	    nums = nums.sort(function(a,b) {return a-b});
	    //console.log(nums);
	    if(nums[0]!=0){
	        return 0;
	    }
	    for(var i=0; i<nums.length; i++){
	        if((Math.abs(nums[i] - nums[i+1])) != 1){
	            return nums[i]+1;
	        }
	    }
	};
