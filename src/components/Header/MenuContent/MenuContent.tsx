import { Button } from "../../_ui";
import { navLinks } from "../MainNav/nav";
import s from "./MenuContent.module.css";

export default function MenuContent({ handleClose }: { handleClose?(): void }) {
  return (
    <div className={s.menuContent}>
      <ul className={s.navList}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className={s.navLink}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <Button onClick={handleClose} className={s.startTrialButton}>
        Start free trial
      </Button>
      <div className={s.existingCustomer}>
        <span>Existing customer?</span>
        <a href="/">Login</a>
      </div>
    </div>
  );
}
