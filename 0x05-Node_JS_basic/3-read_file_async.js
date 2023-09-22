const fs = require('fs');
const csv = require('csv-parser');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Check if the file exists
    fs.access(path, fs.constants.F_OK, (err) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = {
        CS: [],
        SWE: [],
      };

      fs.createReadStream(path)
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
          console.log(`Number of students: ${totalStudents}`);
          console.log(`Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}`);
          console.log(`Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}`);
          resolve(); // Resolve the promise when done
        });
    });
  });
}

module.exports = countStudents;
