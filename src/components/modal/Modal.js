import React, { useState, useEffect, useRef } from "react";
import "./modal.scss";

function Modal(props) {
  const [active, setActive] = useState(false);
  const modal = useRef(null);
  window.addEventListener("click", (event) => {
    console.log("modal", modal.current);
    console.log("event", event.target);
    if (event.target === modal.current) {
      modal.current.classList.remove("active");
      setActive(false);
    }
  });
  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div
      ref={modal}
      className={`modal ${active ? "active" : ""}`}
      id={props.id}
    >
      <iframe
      pause={false}
        width="50%"
        height="50%"
        title="YouTube video player"
      ></iframe>
    </div>
  );
}

export default Modal;
