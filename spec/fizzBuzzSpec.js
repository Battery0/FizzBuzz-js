describe('Fizzbuzz', function() {

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true); // 3 is Fizz, 5 is Buzz & divis by 3 &5 = FizzBuzz
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe('knows when a number is', () => {
    it('divisible by 5', () => {
     expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
  });

  describe('knows when a number is NOT', () => {
    it('divisible by 5', () => {
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });
  });

  describe('knows when a number is', () => {
    it('divisible by 15', () => {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when a numbers is NOT', () => {
    it('divisible by 15', () => {
      expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });

  describe('when playing a game', () => {
    it('"Fizz" when a number is divisible by 3', () => {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });
  });

  describe('when playing a game', () => {
    it('"Buzz" when a number is divisible by 3', () => {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });
  });

  describe('when playing a game', () => {
    it('"Buzz" when a number is divisible by 15', () => {
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz");
    });
  });

  describe('when playing a game', () => {
    it('"Buzz" when a number is divisible by 15', () => {
      expect(fizzbuzz.says(1)).toEqual(1);
    });
  });

});
