"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";

import { useRef, useState, ChangeEvent } from "react";
// import { codeSnippet, codeSnippet2 } from "@/public/code";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Dashboard() {
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
      <div className="question-container">
        <h1 className="pb-10 text-2xl">
          Question Part 1: Input with useRef in background
        </h1>

        <p>Current state 1: {value}</p>
        <div className="flex flex-col items-center">
          <form onSubmit={(e) => e.preventDefault()}>
            <input></input>
          </form>
        </div>
      </div>
    </div>
  );
}
