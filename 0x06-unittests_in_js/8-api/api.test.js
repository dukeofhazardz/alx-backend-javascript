const request = require('supertest');
const app = require('./api'); // Import your Express app here

describe('API Test Suite', () => {
  it('should return the correct status code', (done) => {
    request(app)
      .get('/')
      .expect(200) // Set the expected status code here
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return the correct result', (done) => {
    request(app)
      .get('/')
      .expect('Welcome to the payment system') // Set the expected response body here
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
