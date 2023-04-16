import { Form } from "@raycast/api";
import { useState } from "react";
import { fetchConvertResult } from "./converter";

export default function Command() {
  const [input, setInput] = useState("");
  const [floatActual, setFloatActual] = useState("");
  const [doubleActual, setDoubleActual] = useState("");
  const [floatError, setFloatError] = useState("");
  const [doubleError, setDoubleError] = useState("");
  const [floatBinary, setFloatBinary] = useState("");
  const [doubleBinary, setDoubleBinary] = useState("");

  const errorMessage = "Invalid float number";
  const onFloatInputChange = (text: string) => {
    setInput(text);

    const regex = /^[-+]?[0-9]*\.?[0-9]+$/;
    if (!regex.test(text)) {
      setFloatActual("");
      setDoubleActual("");
      setFloatError("");
      setDoubleError("");
      setFloatBinary("");
      setDoubleBinary("");
      return;
    }

    const result = fetchConvertResult(text);
    const { floatActual, floatError, floatBinary, doubleActual, doubleError, doubleBinary } = result;
    setFloatActual(floatActual.toString());
    setDoubleActual(doubleActual.toString());
    setFloatError(floatError.toString());
    setDoubleError(doubleError.toString());
    setFloatBinary(floatBinary);
    setDoubleBinary(doubleBinary);
  };

  return (
    <Form>
      <Form.TextField
        id="decimal_input"
        title="Decimal Input"
        placeholder="Enter decimal value"
        defaultValue=""
        value={input}
        onChange={(text) => onFloatInputChange(text)}
      />
      <Form.TextField
        id="float_actual"
        title="Stored 32-bits Float Value"
        placeholder={errorMessage}
        value={floatActual}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
      <Form.TextField
        id="float_error"
        title="Loss of Precision"
        placeholder={errorMessage}
        value={floatError}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
      <Form.TextField
        id="float_binary"
        title="32-bits Float Binary Representation"
        placeholder={errorMessage}
        value={floatBinary}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
      <Form.TextField
        id="double_actual"
        title="Stored 64-bits Double Value"
        placeholder={errorMessage}
        value={doubleActual}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
      <Form.TextField
        id="double_error"
        title="Loss of Precision"
        placeholder={errorMessage}
        value={doubleError}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
      <Form.TextField
        id="double_binary"
        title="64-bits Double Binary Representation"
        placeholder={errorMessage}
        value={doubleBinary}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
    </Form>
  );
}
