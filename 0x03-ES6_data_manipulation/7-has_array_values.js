export default function hasValuesFromArray(set, arr) {
  const bool = arr.forEach((key) => set.has(key));
  console.log(bool);
}
