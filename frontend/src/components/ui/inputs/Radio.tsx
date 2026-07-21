import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
label:string;
}

export default function Radio({
label,
...props
}:Props){

return(

<label className="flex items-center gap-3">

<input
type="radio"
className="h-5 w-5"
{...props}
/>

<span>{label}</span>

</label>

)

}