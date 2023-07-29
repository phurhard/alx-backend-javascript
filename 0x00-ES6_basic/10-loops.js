export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    console.log(array.idx);
    const value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
