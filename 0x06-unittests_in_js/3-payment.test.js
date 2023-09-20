const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments', function () {
    // Create a spy for Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function you want to test
    sendPaymentRequestToApi(100, 20);
    console.log(calculateNumberSpy.args);

    // Verify that Utils.calculateNumber was called with the correct arguments
    sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);

    // Clean up the spy
    calculateNumberSpy.restore();
  });

  it('should log the correct total', function () {
    // Create a spy for console.log to capture the output
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function you want to test
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called with the correct message
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');

    // Clean up the spy
    consoleLogSpy.restore();
  });
});
