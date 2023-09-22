const fs = require('fs');
const csv = require('csv-parser');

function countStudents(path) {
  // Check if the file exists
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
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
    });
}

module.exports = countStudents;
