function fizzBuzz (target) {
  var i;
  for (i = 1; i <= target; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      alert('FizzBuzz');
    } else if (i % 3 == 0) {
      alert('Fizz');
    } else if (i % 5 == 0) {
      alert('Buzz');
    } else if (i % 14 == 0) {
      // uge は迫力がある言葉です!
      alert('Uge!');
    } else {
      alert(i);
    }
  }
}
