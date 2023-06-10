function avarege(...numbers) {
  const sum = numbers.reduce((accum, element) => {
    return (accum += element);
  }, 0);

  return sum / numbers.length;
}

// function avarege(numbers) {
//   let sum = 0;
//   numbers.forEach((element) => {
//     sum += element;
//   });

//   let avarege = sum / numbers.length;

//   return avarege;
// }

console.log(avarege(10, 9, 6, 8, 9, 1, 5, 7));
console.log(avarege(2, 5, 7, 1, -2));
console.log(avarege(10, 10, 10, 9));
console.log(avarege(25, 75));
