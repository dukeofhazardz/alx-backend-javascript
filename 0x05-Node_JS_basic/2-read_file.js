const fs = require('fs');
const csv = require('csv-parser');

function countStudents(path) {
  try {
    const fieldCounts = {};
    let totalStudents = 0;

    fs.createReadStream(path)
      .pipe(csv())
      .on('data', (row) => {
        const { firstname, lastname, age, field } = row;

        if (firstname && lastname && age && field) {
          if (fieldCounts[field]) {
            fieldCounts[field]++;
          } else {
            fieldCounts[field] = 1;
          }

          totalStudents++;
        }
      })
      .on('end', () => {
        console.log(`Number of students: ${totalStudents}`);

        for (const field in fieldCounts) {
            if (field === 'CS') {
                getStudentList(path, field, (students) => {
                  console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${students.join(', ')}`);
                });
              }
            }
          });
  } catch (error) {
    console.error('Cannot load the database');
  }
}

function getStudentList(path, studentField) {
  const students = [];

  fs.createReadStream(path)
    .pipe(csv())
    .on('data', (row) => {
      const { firstname, lastname, age, field } = row;

      
      if (firstname && lastname && age && field && field === studentField) {
        students.push(firstname);
      }
    })
    .on('end', () => {
        callback(students);
    });
}

module.exports = countStudents;