"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";

import { useRef, useState, ChangeEvent } from "react";
import { codeSnippet, codeSnippet2 } from "@/public/code";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Input() {
  const [value, setValue] = useState(10);
  const inputRef = useRef<HTMLInputElement>(null);

  const [value2, setValue2] = useState(25);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (inputRef.current?.value) {
      setValue(parseInt(inputRef.current.value));
    }
  };

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setValue2(newValue as number);
  };

  return (
    <div className="flex flex-col items-center gap-20 px-4 sm:px-8 md:px-16 lg:px-20">
      <a
        className="mt-10 underline"
        href="https://github.com/winstonfeng92/NTC"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repository: https://github.com/winstonfeng92/NTC
      </a>
      <div className="question-container">
        <h1 className="pb-10 text-2xl">
          Question Part 1: Input with useRef in background
        </h1>
        <Box
          className="flex flex-col items-center"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <p>Current state 1: {value}</p>
          <TextField
            id="outlined-basic"
            label="Number Input"
            variant="outlined"
            defaultValue={value}
            inputRef={inputRef}
            type="number"
            onInput={handleInputChange}
          />
        </Box>
      </div>
      <h1 className="text-2xl">Question Part 2: Slider bar to change state</h1>
      <Box width={300}>
        <p className="mb-10">Current state 2: {value2}</p>
        <Slider
          value={value2}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handleSliderChange}
        />
      </Box>

      <h1 className="text-2xl">
        Question Part 3: Convert javascript querySelector/eventListener to a
        TypeScript Component
      </h1>
      <SyntaxHighlighter
        lineProps={{
          style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
        }}
        wrapLines={true}
        language="typescript"
        style={docco}
        className="text-sm md:text-base lg:text-lg"
      >
        {codeSnippet}
      </SyntaxHighlighter>

      <h1 className="text-2xl">
        Question Part 4: Create a data class in Kotlin that is serializable with
        Kotlinx serialization and has an enum parameter.
      </h1>
      <SyntaxHighlighter
        lineProps={{
          style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
        }}
        wrapLines={true}
        language="kotlin"
        style={docco}
        className="text-sm md:text-base lg:text-lg"
      >
        {codeSnippet2}
      </SyntaxHighlighter>
    </div>
  );
}
