import { forwardRef } from "react";
import { InputHTMLAttributes } from "react";
import cn from "clsx";
import s from "./Input.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return <input ref={ref} className={cn(s.input, className)} {...props} />;
  }
);

export default Input;
