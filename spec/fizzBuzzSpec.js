describe('Fizzbuzz', function() {

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {
    it('divisable by 3', function() {
      expect(fizzbuzz.isDivisableByThree(3)).toBe(true); // 3 is Fizz, 5 is Buzz & divis by 3 &5 = FizzBuzz
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisable by 3', function() {
      expect(fizzbuzz.isDivisableByThree(1)).toBe(false);
    });
  });

  describe('knows when a number is', () => {
    it('divisable by 5', () => {
     expect(fizzbuzz.isDivisableByFive(5)).toBe(true)
    });
  });

  describe('knows when a number is NOT', () => {
    it('divisable by 5', () => {
      expect(fizzbuzz.isDivisableByFive(1)).toBe(false)
    });
  });

  describe('knows when a number is', () => {
    it('divisable by 15', () => {
      expect(fizzbuzz.isDivisableByFifteen(15)).toBe(true)
    });
  });

  describe('knows when a numbers is NOT', () => {
    it('divisable by 15', () => {
      expect(fizzbuzz.isDivisableByFifteen(1)).toBe(false)
    });
  });

});
