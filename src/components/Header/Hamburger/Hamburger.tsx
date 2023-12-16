import { useState } from "react";
import icon from "../../../icons/menu.svg";
import s from "./Hamburger.module.css";
import { Modal } from "../../_ui";
import MenuContent from "../MenuContent";

export default function Hamburger() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClose = () => setModalIsOpen(false);

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
      <Modal handleClose={handleClose} isOpen={modalIsOpen}>
        <MenuContent handleClose={handleClose} />
      </Modal>
    </>
  );
}
