"use client";

interface Props {
  scale: number;
  onChange: (scale: number) => void;
}

const zoomLevels = [
  0.5,
  0.75,
  1,
  1.25,
  1.5,
  2,
];

export default function PDFZoom({
  scale,
  onChange,
}: Props) {

  return (

    <select
      value={scale}
      onChange={(e) =>
        onChange(Number(e.target.value))
      }
      className="border rounded-xl px-3 py-2"
    >

      {zoomLevels.map((z) => (

        <option
          key={z}
          value={z}
        >
          {z * 100}%
        </option>

      ))}

    </select>

  );

}