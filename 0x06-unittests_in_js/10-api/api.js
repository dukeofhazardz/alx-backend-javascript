const express = require('express');
const app = express();
const PORT = 7865;

// Middleware for validating :id parameter as a number
app.param('id', (req, res, next, id) => {
  if (!isNaN(id)) {
    req.id = parseInt(id, 10);
    next();
  } else {
    res.status(404).send('Not Found');
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint for /cart/:id
app.get('/cart/:id', (req, res) => {
  res.status(200).send(`Payment methods for cart ${req.id}`);
});

// New endpoint for /available_payments
app.get('/available_payments', (res, req) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// New endpoint for /login
app.get('/login', (res, req) => {
  res.status(200).send(`Welcome ${res.body.userName}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
