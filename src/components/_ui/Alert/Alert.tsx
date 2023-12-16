import { ReactNode } from "react";
import s from "./Alert.module.css";
import cn from "clsx";

type AlertVariant = "success" | "error";

export default function Alert({
  children,
  variant,
}: {
  children: ReactNode;
  variant: AlertVariant;
}) {
  return (
    <div className={cn(s.alert, s[variant])} role="alert">
      {children}
    </div>
  );
}
