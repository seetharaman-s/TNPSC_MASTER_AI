"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import TextInput from "./TextInput";

export default function PasswordInput(props: any) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <TextInput
        {...props}
        type={show ? "text" : "password"}
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-4 top-11 text-slate-500"
      >
        {show ? <EyeOff size={18}/> : <Eye size={18}/>}
      </button>
    </div>
  );
}