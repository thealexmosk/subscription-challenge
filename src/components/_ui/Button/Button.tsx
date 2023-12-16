import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
  JSXElementConstructor,
} from "react";
import cn from "clsx";
import s from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  Component?: string | JSXElementConstructor<any>;
  className?: string;
} & (
  | ({
      href?: string;
    } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({
      href?: never;
    } & ButtonHTMLAttributes<HTMLButtonElement>)
);

export default function Button({
  children,
  className,
  href,
  variant = "primary",
  Component = "button",
  size = "lg",
  ...props
}: ButtonProps) {
  const variantClass = s[variant];
  const sizeClass = s[size];

  return (
    <Component
      className={cn(s.button, variantClass, sizeClass, className)}
      href={href}
      {...props}
    >
      {children}
    </Component>
  );
}
