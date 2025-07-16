import type { ReactNode } from "react";

export type WithChildren = { children: ReactNode };

export type FormFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};
