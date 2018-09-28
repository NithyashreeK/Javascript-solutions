/* function to print the sum of discounted and non-discounted prices and also to print the index of non-discounted items */
/* Discounts are available everytime you encounter a right element that is less than or equal to the left element and the difference
between them would be the discounted price */

function discount(prices){ 
   var sum = 0;
   var noDiscount = [];
   for(var i=0; i<prices.length; i++){
   	for(var j=i+1; j<prices.length; j++){
	     if(prices[i] >= prices[j]){
		 sum += prices[i] - prices[j];
		 break;
	     }
	     if(j == prices.length-1){
		 sum += prices[i];
		 noDiscount.push(i);
	     }
	}
	if(i == prices.length-1){
	    sum += prices[i];
	    noDiscount.push(i);
	}
   }
   console.log(sum);
   console.log(noDiscount);
}
