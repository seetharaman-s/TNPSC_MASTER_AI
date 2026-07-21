import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
label:string;
}

export default function Checkbox({
label,
...props
}:Props){

return(

<label className="flex items-center gap-3">

<input
type="checkbox"
className="h-5 w-5 rounded"
{...props}
/>

<span>{label}</span>

</label>

)

}