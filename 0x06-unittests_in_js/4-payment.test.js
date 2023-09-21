const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  // Create a sandbox for sinon to easily clean up stubs and spies
  const sandbox = sinon.createSandbox();

  // Stub the calculateNumber function to always return 10
  let calculateNumberStub;
  beforeEach(function () {
    calculateNumberStub = sandbox.stub(Utils, 'calculateNumber').returns(10);
  });

  // Restore sinon's behavior after each test
  afterEach(function () {
    sandbox.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', function () {
    // Call the function you want to test
    sendPaymentRequestToApi(100, 20);

    // Verify that Utils.calculateNumber was called with the correct arguments
    sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 100, 20);
  });

  it('should log the correct total', function () {
    // Create a spy for console.log to capture the output
    const consoleLogSpy = sandbox.spy(console, 'log');

    // Call the function you want to test
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called with the correct message
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 10');
  });
});
