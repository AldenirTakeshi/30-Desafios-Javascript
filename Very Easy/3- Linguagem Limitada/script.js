function reverse(arr) {
  let reverseArray = [];

  for (let i = 0; i < arr.length; i++) {
    reverseArray[i] = arr[arr.length - 1 - i];
  }

  return reverseArray;
}

console.log(reverse([0, 9, 6, 8, 9, 1, 5, 7]));
console.log(reverse(["Oh", "Hi", "Mark"]));
console.log(reverse([false, true, true, true]));
console.log(reverse(["It`s", "not", true, 0]));
