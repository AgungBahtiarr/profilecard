"use client";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
// import Api from "./api ";
import Api from "./api ";

function Inputs() {
  const [prompt, setPrompt] = useState("");

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    setPrompt(e.target[0].value);
  }


  return (
    <div className="flex flex-col gap-2">
      <h1>Tanya Agung</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text"/>
        <button
          className="bg-slate-500 hover:bg-slate-600 text-white rounded px-2 py-1 mt-2"
          type="submit"
        >
          submit
        </button>
      </form>
      <div className="mt-2 border rounded w-full">
        <p className="p-2">{prompt && <Api prompt={prompt}/>}</p>
      </div>
    </div>
  );
}

export default Inputs;
