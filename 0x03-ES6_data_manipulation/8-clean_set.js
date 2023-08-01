export default function cleanSet(set, startString) {
  const str = [];
  for (const key of set) {
    if (key.has(startString)) str.push(key.has(startString));
  }
  return str;
}
