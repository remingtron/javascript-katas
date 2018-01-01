describe("FizzBuzz", function() {
  
  it("returns 1 for 1", function() {
  	expect(FizzBuzz.convert(1)).toBe(1);
  });

  it("returns 2 for 2", function() {
  	expect(FizzBuzz.convert(2)).toBe(2);
  });

  it("returns fizz for 3", function() {
  	expect(FizzBuzz.convert(3)).toBe('fizz');
  });

  it("returns fizz for 6", function() {
  	expect(FizzBuzz.convert(6)).toBe('fizz');
  });

});
