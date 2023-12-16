import { ReactNode } from "react";
import { createPortal } from "react-dom";

function createWrapper(id: string) {
  const element = document.createElement("div");
  element.setAttribute("id", id);
  document.body.appendChild(element);

  return element;
}

function ReactPortal({
  children,
  id = "portal-root",
}: {
  children: ReactNode;
  id?: string;
}) {
  let element = document.getElementById(id);
  if (!element) {
    element = createWrapper(id);
  }

  return createPortal(children, element);
}
export default ReactPortal;
