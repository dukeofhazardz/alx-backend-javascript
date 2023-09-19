const express = require('express');
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.use((req, res) => {
  res.status(404).send('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot GET ' + req.url + '</pre>\n</body>\n</html>');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
