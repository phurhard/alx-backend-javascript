export default function getStudentsByLocation(arr, loc) {
  const studentLoc = arr.filter((students) => students.location === loc);
  return studentLoc;
}
