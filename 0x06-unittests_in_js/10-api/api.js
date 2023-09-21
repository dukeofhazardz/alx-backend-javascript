const express = require('express');
const app = express();
const PORT = 7865;

// Middleware for validating :id parameter as a number
app.param('id', (req, res, next, id) => {
  if (!isNaN(id) && Number.isInteger(parseFloat(id))) { // Validate :id as a number
    req.id = parseInt(id, 10);
    next();
  } else {
    res.status(404).send('Not Found');
  }
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint for /cart/:id
app.get('/cart/:id', (req, res) => {
  res.status(200).send(`Payment methods for cart ${req.id}`);
});

// New endpoint for /available_payments
app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.status(200).json(paymentMethods);
});

// New endpoint for POST /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.status(200).send(`Welcome ${userName}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
