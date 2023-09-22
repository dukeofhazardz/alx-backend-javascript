const http = require('http');
const fs = require('fs');
const csv = require('csv-parser');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    // Handle the root path
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    // Handle the /students path
    const databaseFile = process.argv[2]; // Get the database filename from command line arguments

    // Check if the file exists
    fs.access(databaseFile, fs.constants.F_OK, (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error\n');
      } else {
        const students = {
          CS: [],
          SWE: [],
        };

        fs.createReadStream(databaseFile)
          .pipe(csv())
          .on('data', (row) => {
            // Check if the row contains valid data
            if (row.firstname && row.lastname && row.age && row.field) {
              // Assuming you have fields 'CS' and 'SWE'
              if (row.field === 'CS' || row.field === 'SWE') {
                students[row.field].push(row.firstname);
              }
            }
          })
          .on('end', () => {
            const totalStudents = students.CS.length + students.SWE.length;
            const responseText = `This is the list of our students\nNumber of students: ${totalStudents}\nNumber of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}\nNumber of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}\n`;

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(responseText);
          });
      }
    });
  } else {
    // Handle other paths with a 404 response
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(1245);

module.exports = app;
