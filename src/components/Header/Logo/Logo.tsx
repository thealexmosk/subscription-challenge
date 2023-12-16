import s from "./Logo.module.css";
import logo from "../../../icons/logo.svg";

export default function Logo() {
  return (
    <a href="/">
      <img src={logo} className={s.logo} alt="Challenge" />
    </a>
  );
}
