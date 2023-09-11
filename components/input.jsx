"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import Api from "./api";

function InputForm() {
  const [value, setValue] = useState("");
  const [prompt, setPrompt] = useState("");

  function getValue(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  function final() {
    setPrompt(value);
  }
  return (
    <div>
      <Input
        type="text"
        onChange={getValue}
        onKeyDown={final}
        placeholder="Berikan Pertanyaanmu"
      />
      <Api prompt={prompt}/>
    </div>
  )
}

export default InputForm;
