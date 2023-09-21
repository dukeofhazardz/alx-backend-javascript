const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const getPaymentTokenFromAPI = require('./6-payment_token');

chai.use(chaiAsPromised);
const { expect } = chai;

describe('getPaymentTokenFromAPI', function () {
    it('should resolve with a successful response when success is true', function (done) {
        // Call the function with success = true
        const promise = getPaymentTokenFromAPI(true);

        // Use chai-as-promised to assert the Promise result
        expect(promise).to.eventually.deep.equal({ data: 'Successful response from the API' }).notify(done);
    });
});
