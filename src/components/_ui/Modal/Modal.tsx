import { ReactNode, useEffect, useRef } from "react";
import ReactPortal from "../ReactPortal";
import Logo from "../../Header/Logo";
import cn from "clsx";
import s from "./Modal.module.css";
import cross from "../../../icons/cross.svg";
import { CSSTransition } from "react-transition-group";

// TODO: add focus trap and
export default function Modal({
  children,
  isOpen,
  handleClose,
}: {
  children: ReactNode;
  isOpen: boolean;
  handleClose(): void;
}) {
  const modalRef = useRef(null);

  return (
    <ReactPortal id="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ enter: 0, exit: 300 }}
        unmountOnExit
        classNames={{
          appear: s.modal,
          enterDone: s.modalEnterDone,
          exit: s.modalExit,
        }}
        nodeRef={modalRef}
      >
        <div className={s.modal} ref={modalRef} role="dialog">
          <div className={s.modalOverlay} onClick={handleClose}></div>
          <div className={s.modalContent}>
            <div className={cn(s.modalHeader, s.modalContainer)}>
              <Logo />
              <button onClick={handleClose} className={s.closeBtn}>
                <img src={cross} alt="close modal" />
              </button>
            </div>
            <div className={s.modalContainer}>{children}</div>
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}
