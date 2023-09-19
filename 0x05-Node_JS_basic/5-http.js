const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;
 
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/school') {
    countStudents('database.csv')
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        console.error(error);
        res.end('Error loading student data\n');
      });
  } else {
    // Handle 404 - Page not found
    res.statusCode = 404;
    res.end('Page not found\n');
  }
});
 
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;