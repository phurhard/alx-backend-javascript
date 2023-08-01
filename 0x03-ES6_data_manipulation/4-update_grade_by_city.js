/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newgrade) {
  const student = students.filter((param) => param.location === city);
  const studentsGrade = student.map((item) => {
    for (const Grade of newgrade) {
      if (item.id === Grade.studentId) {
        item.grade = Grade.grade;
      } else {
        item.grade = item.grade ? item.grade : 'N/A';
      }
    }
    return item;
  });
  return studentsGrade;
}
