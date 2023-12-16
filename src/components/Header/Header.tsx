import cn from "clsx";
import s from "./Header.module.css";
import Hamburger from "./Hamburger";
import MainNav from "./MainNav/MainNav";
import SecondaryNav from "./SecondaryNav";

export default function Header() {
  return (
    <header className={cn("container", s.header)} id="header">
      <MainNav />
      <SecondaryNav />
      <Hamburger />
    </header>
  );
}
