/* eslint-disable no-unused-vars */
export default function cleanSet(set, startString) {
  const { length } = startString;
  const Str = [];
  const str = set.forEach((value) => {
    if (value.startsWith(startString)) {
      if (length !== 0) Str.push(`${value.slice(length)}`);
    }
  });
  return Str.join('-');
}
