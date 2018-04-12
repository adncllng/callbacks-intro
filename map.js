


/// The function will return a new array based on the results of the callback function.
var input = [1,2,4,5];

var result = input.map(myCallback);

//result === [ 2, 4, 8, 10 ]

console.log("lame old map", result);

function myCallback(element){
 return element * 2;
}









function myMap(arr, callback){

  var newArr = [];

  arr.forEach(function(ment){

    var newElement = myCallback(ment);

    newArr.push(newElement);

  })
  return newArr;
}





var coolnewmap = myMap(input, myCallback);

console.log( "w00t!!!", myMap(input, myCallback) )










// myMap(input, myCallback)


