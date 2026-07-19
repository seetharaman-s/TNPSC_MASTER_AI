"use client";

export default function WeeklyChart() {

  const values = [35, 60, 40, 90, 75, 65, 85];

  return (

    <div>

      <h3 className="font-semibold mb-3">
        Weekly Activity
      </h3>

      <div className="flex items-end gap-3 h-28">

        {values.map((value, index) => (

          <div
            key={index}
            className="flex-1 bg-blue-500 rounded-t-xl"
            style={{
              height: `${value}%`,
            }}
          />

        ))}

      </div>

    </div>

  );

}