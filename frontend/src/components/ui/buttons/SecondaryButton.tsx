import PrimaryButton from "./PrimaryButton";

export default function SecondaryButton(props: any) {
  return (
    <PrimaryButton
      {...props}
      className={`bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-white ${props.className || ""}`}
    />
  );
}