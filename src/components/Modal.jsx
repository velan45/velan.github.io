import { useEffect, useRef } from "react";

/**
 * Accessible modal built on the native <dialog> element.
 * `children` is a render function receiving a `close` callback.
 */
export default function Modal({ labelledBy, className = "", onClose, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (dialog && !dialog.open) dialog.showModal();
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      className={`dialog ${className}`}
      aria-labelledby={labelledBy}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && close()}
    >
      {children(close)}
    </dialog>
  );
}
