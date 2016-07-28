/*
 Steps:
 1. Loop through all phone numbers
 2. Split numbers into individual characters (an array of strings, each string being a character)
 3. Map each character from string into number or NaN
 4. Filter out the NaN's
 5. Reduce the numbers down to a sum

 */
var numbers = ['111-555-9783','800-556-9712', '999-999-9711', '800-505-9710'];
var sums = [];

for (i=0; i<numbers.length; i++){
  var phoneNumber = numbers[i];
  var characterArray= phoneNumber.split('');
  //console.log(characterArray);

  var mappedArray = characterArray.map(function(character){
    var parsedCharacter = parseInt(character);
    //console.log(parsedCharacter);
    return parsedCharacter;
  }); // End map
  //console.log(mappedArray);

  var filteredArray = mappedArray.filter(function(parsedCharacter){
    var integer = Number.isInteger(parsedCharacter);
    //console.log(integer);
    return integer;
  }); // End filter
  //console.log(filteredArray);

  var reducedArray = filteredArray.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
  }); // End reduce
  //console.log(reducedArray,(i));
var sumObject = {
  sum: reducedArray,
  index: i,
};
console.log(sumObject);
sums.push(sumObject);

} // End for loop

var sortedSums = sums.sort(function(a, b) {
  console.log(a);
  console.log(b);
  console.log('');
  return b.sum - a.sum ;
})
console.log(sortedSums);

var largestSum = sortedSums[0];
console.log(largestSum);

var index = largestSum.index;
console.log(index);

var largestPhoneNumber = numbers[index];
console.log(largestPhoneNumber);

  //var reducedNumbers = phoneNumberArray.reduce(function (previousValue, currentValue){
  //  var parsed = parseInt(currentValue);
    //console.log(parsed);
    //return previousValue + currentValue;
  //});

  //console.log(reducedNumbers);


// var multiDimensionArray = [
//   ['8', '0', '1', '-', '5', '5', '5', '-', '9', '7', '1', '3'],
//   ['8', '0', '1', '-', '5', '5', '5', '-', '9', '7', '1', '2'],
//   ['8', '0', '1', '-', '5', '5', '5', '-', '9', '7', '1', '1'],
//   ['8', '0', '1', '-', '5', '5', '5', '-', '9', '7', '1', '0']
// ];

// ['8', '0', '1', '-', '5', '5', '5', '-', '9', '7', '1', '3'].reduce...

//var splitNumbers = numbers.split('');
//console.log(splitNumbers);

//var numbersReformatted = (function(phoneNumber){
  //var output = numbers.split('');
  //return output;
  //console.log(output);
//}






//var largest = getLargestNumber(numbers);

//function getLargestNumber(numbers){
  //var greatestNumber;

  //sum numbers -- then sort - loop grab first (or last) item to get highest value
  //return greatestNumber;
//}
