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
      <Form.Description text="Enter a float number in decimal." />
      <Form.TextField
        id="float_input"
        title="Float Input"
        placeholder="Enter float value"
        defaultValue=""
        value={input}
        onChange={(text) => onFloatInputChange(text)}
      />
      <Form.TextField
        id="float_actual"
        title="Float Actual"
        placeholder={errorMessage}
        value={floatActual}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
      <Form.TextField
        id="float_error"
        title="Float Error"
        placeholder={errorMessage}
        value={floatError}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
      <Form.TextField
        id="float_binary"
        title="32 bits Float Output"
        placeholder={errorMessage}
        value={floatBinary}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
      <Form.TextField
        id="double_actual"
        title="Double Actual"
        placeholder={errorMessage}
        value={doubleActual}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
      <Form.TextField
        id="double_error"
        title="Double Error"
        placeholder={errorMessage}
        value={doubleError}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
      <Form.TextField
        id="double_binary"
        title="64 bits Double Output"
        placeholder={errorMessage}
        value={doubleBinary}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
    </Form>
  );
}
