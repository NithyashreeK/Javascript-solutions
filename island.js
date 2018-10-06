var arr = [[1,1,0,0,0], 
				   [1,1,0,0,0],
				   [0,0,1,0,0],
				   [0,0,0,1,1]];
		var count = 0;
		for(var i=0; i<arr.length; i++){
			for(var j=0; j<arr[i].length; j++){
				if(arr[i][j]==1){
					count++;
					DFS(arr, i, j);
				}				
			}
		}
		console.log(count);
		
    function DFS(arr, i, j){
			if(i<0 || j<0 || i>=arr.length || j>= arr[i].length || (arr[i][j]!=1)){
				return;
			}
			arr[i][j] = 0;
			DFS(arr, i+1, j);
			DFS(arr, i, j+1);
			DFS(arr, i-1, j);
			DFS(arr, i, j-1);
		}
