import { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement>{
label?:string;
}

export default function SelectInput({
label,
children,
...props
}:Props){

return(

<div>

{label && <label className="mb-2 block">{label}</label>}

<select

className="
w-full
rounded-xl
border
border-slate-300
dark:border-slate-700
p-3
bg-white
dark:bg-slate-900
"

{...props}

>

{children}

</select>

</div>

)

}