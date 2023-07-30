export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const index = array.indexOf(idx);
    // eslint-disable-next-line no-param-reassign
    array[index] = appendString + idx;
  }

  return array;
}
