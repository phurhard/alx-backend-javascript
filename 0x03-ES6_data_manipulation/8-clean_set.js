/* eslint-disable no-unused-vars */
export default function cleanSet(set, startString) {
  const newArr = [];
  const arr = Array.from(set);
  if (typeof startString !== 'string') {
    return '';
  }
  const str = arr.forEach((value) => {
    if (value) {
      if (startString.length !== 0) newArr.push(`${value.slice(startString.length)}`);
    }
  });
  return newArr.join('-');
}
