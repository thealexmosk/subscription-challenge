import { ReactNode } from "react";
import cn from "clsx";
import s from "./HeaderLink.module.css";

export default function HeaderLink({
  className,
  href,
  children,
  ...props
}: {
  className?: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={cn(s.link, className)} {...props}>
      {children}
    </a>
  );
}
