"use client";

import { Search } from "lucide-react";
import TextInput from "./TextInput";

export default function SearchInput(props:any){
  return(
    <div className="relative">
      <Search
        size={18}
        className="absolute left-4 top-4 text-slate-400"
      />

      <TextInput
        className="pl-11"
        placeholder="Search..."
        {...props}
      />
    </div>
  );
}