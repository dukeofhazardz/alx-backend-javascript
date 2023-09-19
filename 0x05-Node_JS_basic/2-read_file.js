const fs = require('fs');

const csv = require('csv-parser');

function getStudentList(path, studentField, callback) {
  const students = [];

  fs.createReadStream(path)
    .pipe(csv())
    .on('data', (row) => {
      const {
        firstname,
        lastname,
        age,
        field,
      } = row;

      if (firstname && lastname && age && field && field === studentField) {
        students.push(firstname);
      }
    })
    .on('end', () => {
      callback(students);
    });
}

function countStudents(path) {
  try {
    const fieldCounts = {};
    let totalStudents = 0;

    fs.createReadStream(path)
      .pipe(csv())
      .on('data', (row) => {
        const {
          firstname,
          lastname,
          age,
          field,
        } = row;

        if (firstname && lastname && age && field) {
          if (fieldCounts[field]) {
            fieldCounts[field] += 1;
          } else {
            fieldCounts[field] = 1;
          }

          totalStudents += 1;
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
        for (const field in fieldCounts) {
          if (field === 'SWE') {
            getStudentList(path, field, (students) => {
              console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${students.join(', ')}`);
            });
          }
        }
      });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
