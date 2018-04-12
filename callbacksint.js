// The second argument/parameter is expected to be a function



function findWaldo(arr, found) {



  arr.forEach((value,index) => {
  if (arr[index ] === "Waldo") {
      found(index);
  }
})
}

function actionWhenFound(i) {
  console.log("Found him @ index", i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// Did you know that we can pass results via callback functions?

// Modify the callback function in the previous example so that logs the index
//  of the array where Waldo is found, ie. "Found Waldo at index 2!". (You will
//   need to modify actionWhenFound to receive the index.)

// Once you have this working, remember to commit your changes using Git. A good
// commit message should be concise and descriptive of the changes you have made.
//  An example commit message: Print the index of Waldo when found.