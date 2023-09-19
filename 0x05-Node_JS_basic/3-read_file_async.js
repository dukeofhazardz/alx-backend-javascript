const fs = require('fs');
const csv = require('csv-parser');

async function getStudentList(path, studentField) {
  const students = [];

  return new Promise((resolve) => {
    fs.createReadStream(path)
      .pipe(csv())
      .on('data', (row) => {
        const {
          firstname, lastname, age, field,
        } = row;

        if (firstname && lastname && age && field && field === studentField) {
          students.push(firstname);
        }
      })
      .on('end', () => {
        resolve(students.join(', '));
      });
  });
}

function countStudents(path) {
  return new Promise(async (resolve, reject) => {
    try {
      const fieldCounts = {};
      let totalStudents = 0;

      fs.createReadStream(path)
        .pipe(csv())
        .on('data', (row) => {
          const {
            firstname, lastname, age, field,
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
        .on('end', async () => {
          console.log(`Number of students: ${totalStudents}`);

          for (const field in fieldCounts) {
            if (field === 'CS') {
              const studentList = await getStudentList(path, field);
              console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${studentList}`);
            }
          }

          for (const field in fieldCounts) {
            if (field === 'SWE') {
              const studentList = await getStudentList(path, field);
              console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${studentList}`);
            }
          }

          resolve();
        });
    } catch (error) {
      reject('Cannot load the database');
    }
  });
}

module.exports = countStudents;
