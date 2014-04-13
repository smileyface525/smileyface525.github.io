//oddLength = [1, 2, 3, 4, 5, 5, 7];
//evenLength = [4, ,4, 5, 6, 6, 6, 7];
var oddLength =[1, 2, 3, 4, 5,5,7];
var evenLength =[4,5,6,7,7,8];
 var sum = function(array) {
	
	if (typeof array === 'array') {
		var total = 0;
		for (var i = 0; i < array.length; i++) {
		total += array[i];
		}
	return total;
	}
}

function assert(test, message, test_number) { 
  if(!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert (
  (typeof sum === 'function'),
  "Function sum should return a sum of an array",
  "1. "
)

assert (
  (sum(oddLength) === 27),
  "Function should return the sum of all elements in oddLength",
  "2. "
)

assert (
  (sum(evenLength) === 43),
  "Function should return the sum of all elements in evenLength",
  "3. "
)

assert (
  (typeof mean === 'function'),
  "Function mean should return a mean of an array",
  "4. "
)

assert (
  (mean(oddLength) === 3.857142857142857),
  "Function should return the mean of all elements in oddLength",
  "5. "
)

assert (
  (mean(evenLength) === 5.375),
  "Function should return the mean of all elements in evenLength",
  "6. "
)

assert (
  (typeof median(array) === 'function'),
  "Function median should return a median of an array",
  "7. "
)

assert (
  (median(oddLength) === 4),
  "Function should return a median value of all of the elements in oddLength",
  "8. "
)

assert (
  (median(evenLength) === 5.5),
  "Function should return a median value of all of the elements in evenLength",
  "9. "
)
