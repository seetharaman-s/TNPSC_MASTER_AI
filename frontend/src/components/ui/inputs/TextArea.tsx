import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label?:string;
}

export default function TextArea({
label,
...props
}:Props){

return(

<div>

{label && (
<label className="mb-2 block font-medium">
{label}
</label>
)}

<textarea

className="
w-full
rounded-xl
border
border-slate-300
dark:border-slate-700
bg-white
dark:bg-slate-900
p-4
focus:ring-2
focus:ring-blue-500
outline-none
"

{...props}

/>

</div>

)

}