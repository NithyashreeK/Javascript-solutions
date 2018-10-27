/* checks if every element in arr1 is an anagram of its corresponding element in arr2*/
function checAA(arr1, arr2){
	if(arr1.length != arr2.length){
		return false;
	}
	for(var i=0; i<arr1.length; i++){
		if(checAna(arr1[i], arr2[i])){
			return true;
		}else{
			return false;
		}
	}
}

/* checks for all the elements of an array which are anagrams of the given word */
function anA(word, arr){
	var res = [];
	for(var i=0; i<arr.length; i++){
		if(checAna(arr[i], word)){
			res.push(arr[i]);
		}
	}
	return res;
}

/* actual function performing the check */
function checAna(str1, str2){
	var obj = {};
	if(str1.length != str2.length){
		return false;
	}
	for(var i=0; i<str1.length; i++){
		if(obj[str1[i]] == undefined){
			obj[str1[i]] = 1;
		}else{
			obj[str1[i]]++;
		}
	}
	for(var i=0; i<str2.length; i++){
		if(!obj[str2[i]]){
			return false;
		}else{
			obj[str2[i]]--;
		}
	}
	return true;
}
