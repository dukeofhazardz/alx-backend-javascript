const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();
const port = 1245;

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Define a route for the /students endpoint
app.get('/students', (req, res) => {
  const databaseFile = process.argv[2]; // Get the database filename from command line arguments

  // Check if the file exists
  fs.access(databaseFile, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(500).send('Internal Server Error\n');
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

          res.status(200).send(responseText);
        });
    }
  });
});

// Start the HTTP server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
