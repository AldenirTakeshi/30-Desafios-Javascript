function chunck(num) {
  if (num === 0) {
    return "";
  }
  if (num === 1) {
    return "chunck";
  } else {
    return "chunck-" + chunck(num - 1);
  }
}

console.log(chunck(4));
console.log(chunck(1));
console.log(chunck(8));
console.log(chunck(2));
