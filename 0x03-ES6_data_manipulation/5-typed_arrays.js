export default function createInt8TypedArray(length, position, value) {
  const arr = new ArrayBuffer(length);
  const int8view = new Int8Array(arr);

  if (int8view) int8view[position] = value;
  else console.log('Position outside range');
  return int8view;
}
