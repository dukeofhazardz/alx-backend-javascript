const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calc Addition", function() {
  it("checks equality", function() {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    assert.equal(calculateNumber('SUM', 4.6, 5.3), 10);
  });
});

describe("calc Subtraction", function() {
  it("checks equality", function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
});

describe("calc Division", function() {
  it("checks equality", function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});