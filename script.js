const arr = [1, 2, 3, 4, 5];
let ans = arr.reduce(test, 0);

function test(prvValue, curValue) {
  if (curValue % 2 === 0) {
    return prvValue + curValue;
  } else {
    return prvValue;
  }
}

console.log(ans);
