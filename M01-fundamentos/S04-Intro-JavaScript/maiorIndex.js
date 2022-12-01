// Create a function to print the index of the biggest number of an array:

function mIndex(array) {
  let compare = array[0];
  let maiorIndex;
  for (let index = 0; index < array.length ; index ++) {
    if (compare < array[index]) {
      compare = array[index];
      maiorIndex = index;
    }
  } return maiorIndex;
}
console.log(mIndex(exercise = [2,6,26,8,14,7,10]));
