export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
    const studentGrade = foundGrade ? foundGrade.grade : 'N/A';
    return { ...student, studentGrade };
  }).filter((student) => student.location === city);
}
