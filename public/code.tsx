export const codeSnippet = `
import React, { useState, ChangeEvent } from "react";

/*We could assign a onChange property to the element which 
will trigger the event handler to handle the keyboard change.*/

export default function InputComponent() {
  const [keyboardValue, setKeyboardValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyboardValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={keyboardValue} onChange={handleChange} />
      <p>Input value: {keyboardValue}</p>
    </div>
  );
}
`;

export const codeSnippet2 = `
import kotlinx.serialization.Serializable

@Serializable
data class Task(
    val name: String,
    val priority: Priority
) {
    @Serializable
    enum class Priority {
        LOW,
        MEDIUM,
        HIGH
    }
}
`;
