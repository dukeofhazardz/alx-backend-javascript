const request = require('supertest');
const app = require('./api');
const assert = require('chai').assert;

describe('API Test Suite', function () {
  it('should return the correct status code', function (done) {
    request(app)
      .get('/cart/123')
      .expect(200, done);
  });

  it('should return Payment methods for cart :id', function (done) {
    request(app)
      .get('/cart/456')
      .end(function (err, res) {
        if (err) return done(err);
        assert.equal(res.text, 'Payment methods for cart 456');
        done();
      });
  });

  it('should return 404 when :id is not a number', function (done) {
    request(app)
      .get('/cart/abc')
      .expect(404, done);
  });

  it('should return 404 when :id is not an integer', function (done) {
    request(app)
      .get('/cart/1.23')
      .expect(404, done);
  });

  // Add more test cases as needed
});
