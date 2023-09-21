const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
    let consoleLogSpy;

    beforeEach(function () {
        // Create a spy for console.log to capture the output
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        // Restore the spy after each test
        consoleLogSpy.restore();
    });

    it('should log the correct total for 100 and 20', function () {
        // Call the function with arguments 100 and 20
        sendPaymentRequestToApi(100, 20);

        // Verify that console.log was called with the correct message
        sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');

        // Verify that console.log was only called once
        sinon.assert.calledOnce(consoleLogSpy);
    });

    it('should log the correct total for 10 and 10', function () {
        // Call the function with arguments 10 and 10
        sendPaymentRequestToApi(10, 10);

        // Verify that console.log was called with the correct message
        sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 20');

        // Verify that console.log was only called once
        sinon.assert.calledOnce(consoleLogSpy);
    });
});