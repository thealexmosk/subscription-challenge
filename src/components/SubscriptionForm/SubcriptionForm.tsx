import { useRef } from "react";
import { Button, Input } from "../_ui";
import s from "./SubcriptionForm.module.css";
import cn from "clsx";

export default function SearchForm({ className }: { className?: string }) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className={cn(s.subscriptionContainer, className)}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("value:", inputRef.current?.value);
        }}
        className={s.form}
      >
        <Input
          type="email"
          aria-label="Enter your email"
          placeholder="Enter your email"
          className={s.input}
          ref={inputRef}
        />
        <Button>Start free trial</Button>
      </form>
      <p className={s.subscriptionDescription}>
        Start your free 14-day trial, no credit card necessary. By providing
        your email, you agree to our <a href="/">terms of service.</a>
      </p>
    </div>
  );
}
