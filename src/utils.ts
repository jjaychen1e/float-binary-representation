export function floatToBinary(value: number): string {
  const floatArray = new Float32Array(1);
  const intArray = new Int32Array(floatArray.buffer);

  floatArray[0] = value;
  return intArray[0].toString(2).padStart(32, "0");
}

export function doubleToBinary(value: number): string {
  const doubleArray = new Float64Array(1);
  const intArray = new BigInt64Array(doubleArray.buffer);

  doubleArray[0] = value;
  return intArray[0].toString(2).padStart(64, "0");
}

export function binaryToFloat(value: string): number {
  const intValue = parseInt(value, 2);
  const floatArray = new Float32Array(new Int32Array([intValue]).buffer);

  return floatArray[0];
}

export function binaryToDouble(value: string): number {
  const bigIntValue = BigInt(`0b${value}`);
  const doubleArray = new Float64Array(new BigInt64Array([bigIntValue]).buffer);

  return doubleArray[0];
}
