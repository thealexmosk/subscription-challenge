import logo from "../../../icons/logo.svg";
import HeaderLink from "../HeaderLink";
import s from "./MainNav.module.css";
import { navLinks } from "./nav";

export default function MainNav() {
  return (
    <div className={s.mainNav}>
      <a href="/">
        <img src={logo} className={s.logo} alt="Challenge" />
      </a>
      <ul className={s.mainNavList}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <HeaderLink href={link.href}>{link.name}</HeaderLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
