import { FormEvent, useRef } from "react";
import { Button, Input } from "../_ui";
import s from "./SubcriptionForm.module.css";
import cn from "clsx";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../lib/apollo/queries/user";
import Alert from "../_ui/Alert";

const Form = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [addTodo, { data, loading, error }] = useMutation(CREATE_USER);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = inputRef.current?.value;

    if (!email) throw new Error("No email provided.");

    addTodo({
      variables: {
        email,
        name: email,
        username: email,
      },
    });
  };

  if (error) {
    return (
      <Alert variant="error">Error creating user. Please try again.</Alert>
    );
  }

  if (data) {
    return (
      <Alert variant="success">
        Thank you <strong>{data.createUser?.name}</strong>! Your free 14-day
        trial has started.
      </Alert>
    );
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className={cn(s.form, {
        [s.formLoading]: loading,
      })}
    >
      <Input
        type="email"
        aria-label="Enter your email"
        placeholder="Enter your email"
        className={s.input}
        ref={inputRef}
        required
      />
      <Button>Start free trial</Button>
    </form>
  );
};

export default function SearchForm({ className }: { className?: string }) {
  return (
    <div className={cn(s.subscriptionContainer, className)}>
      <Form />
      <p className={s.subscriptionDescription}>
        Start your free 14-day trial, no credit card necessary. By providing
        your email, you agree to our <a href="/">terms of service.</a>
      </p>
    </div>
  );
}
