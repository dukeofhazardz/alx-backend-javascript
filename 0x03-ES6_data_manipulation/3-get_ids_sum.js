export default function getStudentIdsSum(students) {
  const ids = [];
  for (const student of students) {
    ids.push(student.id);
  }
  const idSum = ids.reduce((a, b) => a + b);
  return idSum;
}
