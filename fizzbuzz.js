/** @format */

function fizzBuzz(target) {
  let i;
  for (i = 1; i <= target; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      // 3と5の倍数のとき
      alert("FizzBuzz");
    } else if (i % 3 == 0) {
      alert("Fizz");
    } else if (i % 5 == 0) {
      alert("Buzz");
    } else {
      alert(i);
    }
  }
}
