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

  // Test suite for /available_payments endpoint
  describe('GET /available_payments', function () {
    it('should return the correct payment methods', function (done) {
      request(app)
        .get('/available_payments')
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          assert.deepEqual(res.body, {
            payment_methods: {
              credit_cards: true,
              paypal: false,
            },
          });
          done();
        });
    });
  });

  // Test suite for /login endpoint
  describe('POST /login', function () {
    it('should return a welcome message with username', function (done) {
      const userName = 'Betty';
      request(app)
        .post('/login')
        .send({ userName })
        .set('Content-Type', 'application/json')
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);
          assert.equal(res.text, `Welcome ${userName}`);
          done();
        });
    });
  });

  // Add more test cases as needed
});
