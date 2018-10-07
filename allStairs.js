//floyd inverted staircase
		var prev = 1;
		for(var i=5; i>0; i--){
			var temp = '';
			for(var j=0; j<i; j++){
				temp = temp+' '+prev;
				prev++;
			}
			console.log(temp);
		}


		//floyd staircase
		var prev = 1;
		for(var i=1; i<=5; i++){
			var temp = ' ';
			for(var j=0; j<i; j++){
				temp = temp+' '+prev;
				prev++;
			}
			console.log(temp);
		}

		// regular staircase
		var prev = '1';
		for(var i=1; i<=6; i++){
			var temp = '';
			for(var j=0; j<i; j++){
				temp = prev+' '+temp;
			}
			console.log(temp);
		}

		//inverted staircase
		var prev = '1';
		for(var i=6; i>0; i--){
			var temp = '';
			for(var j=0; j<i; j++){
				temp = prev+' '+temp;
			}
			console.log(temp);
		}
