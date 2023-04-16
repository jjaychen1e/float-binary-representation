import BigNumber from "bignumber.js";
import { floatToBinary, doubleToBinary, binaryToFloat, binaryToDouble } from "./utils";

export class Result {
  floatActual!: string;
  doubleActual!: string;
  floatError!: string;
  doubleError!: string;
  floatBinary!: string;
  doubleBinary!: string;
}

export function fetchConvertResult(input: string): Result {
  const floatValue = parseFloat(input);
  const doubleValue = parseFloat(input);

  const floatActualBinary = floatToBinary(floatValue);
  const doubleActualBinary = doubleToBinary(doubleValue);

  const floatActualBinaryFormatted = formatBinary(floatActualBinary);
  const doubleActualBinaryFormatted = formatBinary(doubleActualBinary);

  const floatActual = binaryToFloat(floatActualBinary);
  const doubleActual = binaryToDouble(doubleActualBinary);

  const bigNumberOriginal = new BigNumber(input);
  const bigNumberFloat = new BigNumber(floatActual);
  const bigNumberDouble = new BigNumber(doubleActual);
  const floatError = bigNumberFloat.minus(bigNumberOriginal).abs().toString();
  const doubleError = bigNumberDouble.minus(bigNumberOriginal).abs().toString();

  return {
    floatActual: floatActual.toString(),
    doubleActual: doubleActual.toString(),
    floatError: floatError,
    doubleError: doubleError,
    floatBinary: floatActualBinaryFormatted,
    doubleBinary: doubleActualBinaryFormatted,
  };
}

function formatBinary(binary: string): string {
  return binary.replace(/(.{8})/g, "$1 ").trim();
}
