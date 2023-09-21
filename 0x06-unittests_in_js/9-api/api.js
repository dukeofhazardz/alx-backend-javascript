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

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint for /cart/:id
app.get('/cart/:id', (req, res) => {
  res.status(200).send(`Payment methods for cart ${req.id}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
