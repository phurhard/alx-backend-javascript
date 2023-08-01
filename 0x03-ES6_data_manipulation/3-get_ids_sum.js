export default function getStudentIdsSum(arr) {
  const sumId = arr.reduce((sum, item) => sum + item.id, 0);
  return sumId;
}
