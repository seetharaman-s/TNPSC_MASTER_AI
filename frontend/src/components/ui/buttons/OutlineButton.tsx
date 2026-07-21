import PrimaryButton from "./PrimaryButton";

export default function OutlineButton(props: any) {
  return (
    <PrimaryButton
      {...props}
      className={`bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 ${props.className || ""}`}
    />
  );
}