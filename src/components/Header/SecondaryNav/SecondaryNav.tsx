import { Button } from "../../_ui";
import HeaderLink from "../HeaderLink";
import s from "./SecondaryNav.module.css";

export default function SecondaryNav() {
  return (
    <div className={s.secondaryNav}>
      <HeaderLink href="/">Log in</HeaderLink>
      <Button variant="secondary" size="md">
        Start free trial
      </Button>
    </div>
  );
}
