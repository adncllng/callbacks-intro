
function myMap(arr, callback){
  var newArr = [];
  arr.forEach(function(element){
    newArr.push(callback(element);;
  })
  return newArr;
}
