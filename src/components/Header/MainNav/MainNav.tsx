import HeaderLink from "../HeaderLink";
import Logo from "../Logo";
import s from "./MainNav.module.css";
import { navLinks } from "./nav";

export default function MainNav() {
  return (
    <div className={s.mainNav}>
      <Logo />
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
