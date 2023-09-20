const chai = require("chai");
const calculateNumber = require("./2-calcul_chai");
const expect = chai.expect;

describe("calc Addition", function() {
  it("checks equality", function() {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4)
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    expect(calculateNumber('SUM', 4.6, 5.3)).to.equal(10);
  });
});

describe("calc Subtraction", function() {
  it("checks equality", function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
});

describe("calc Division", function() {
  it("checks equality", function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});