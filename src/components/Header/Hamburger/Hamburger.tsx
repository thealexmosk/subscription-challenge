import icon from "../../../icons/menu.svg";
import s from "./Hamburger.module.css";

export default function Hamburger() {
  return (
    <button className={s.hamburgerButton} onClick={() => {}}>
      <img src={icon} className={s.hamburderIcon} alt="hamburger menu" />
    </button>
  );
}
