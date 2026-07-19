"use client";

const levels = [
  "All",
  "Easy",
  "Medium",
  "Hard",
];

export default function DifficultyFilter({
  selected,
  onSelect,
}:{
  selected:string;
  onSelect:(v:string)=>void;
}){

  return(

    <div className="flex gap-3 mb-6">

      {levels.map(level=>(

        <button
          key={level}
          onClick={()=>onSelect(level)}
          className={`px-5 py-2 rounded-full ${
            selected===level
            ? "bg-blue-600 text-white"
            : "bg-white shadow"
          }`}
        >

          {level}

        </button>

      ))}

    </div>

  )

}