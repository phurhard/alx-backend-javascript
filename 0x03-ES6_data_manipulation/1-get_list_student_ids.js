export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const id = arr.map((item) => item.id);
    return id;
  // eslint-disable-next-line no-else-return
  } else {
    return [];
  }
}
