describe('Fizzbuzz', function() {

  let fizzBuzz;

  describe('knows when a number is', function() {
    it('divisable by 3', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisableByThree(3)).toBe(true); // 3 is Fizz, 5 is Buzz & divis by 3 &5 = FizzBuzz
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisable by 3', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisableByThree(1)).toBe(false);
    });
  });




});
