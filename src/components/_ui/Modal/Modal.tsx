import { ReactNode, useEffect } from "react";
import ReactPortal from "../ReactPortal";
import Logo from "../../Header/Logo";
import cn from "clsx";
import s from "./Modal.module.css";
import cross from "../../../icons/cross.svg";

export default function Modal({
  children,
  isOpen,
  handleClose,
}: {
  children: ReactNode;
  isOpen: boolean;
  handleClose(): void;
}) {
  if (!isOpen) return null;

  return (
    <ReactPortal id="react-portal-modal-container">
      <div className={s.modal}>
        <div className={s.modalContent}>
          <div className={cn(s.modalHeader, s.modalContainer)}>
            <Logo />
            <button onClick={handleClose} className={s.close}>
              <img src={cross} alt="close modal" />
            </button>
          </div>
          <div className={s.modalContainer}>{children}</div>
        </div>
      </div>
    </ReactPortal>
  );
}
