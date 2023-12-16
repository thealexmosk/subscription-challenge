import { useState } from "react";
import icon from "../../../icons/menu.svg";
import s from "./Hamburger.module.css";
import { Modal } from "../../_ui";
import MenuContent from "../MenuContent";

export default function Hamburger() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button
        className={s.hamburgerButton}
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        <img src={icon} className={s.hamburderIcon} alt="hamburger menu" />
      </button>
      <Modal handleClose={() => setModalIsOpen(false)} isOpen={modalIsOpen}>
        <MenuContent />
      </Modal>
    </>
  );
}
