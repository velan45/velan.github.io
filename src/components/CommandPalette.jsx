import { useEffect, useMemo, useRef, useState } from "react";
import Icon from "./Icon.jsx";

export default function CommandPalette({ commands, onClose }) {
  const dialogRef = useRef(null);
  const listRef = useRef(null);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? commands.filter((c) => `${c.group} ${c.label}`.toLowerCase().includes(q)) : commands;
  }, [commands, query]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  useEffect(() => setIndex(0), [query]);

  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${index}"]`)?.scrollIntoView({ block: "nearest" });
  }, [index]);

  const run = (cmd) => {
    dialogRef.current?.close();
    // Run after the dialog closes so scroll/focus changes apply to the page.
    setTimeout(cmd.run, 0);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[index]) {
      e.preventDefault();
      run(results[index]);
    }
  };

  let lastGroup = "";

  return (
    <dialog
      ref={dialogRef}
      className="dialog palette"
      aria-label="Command palette"
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
    >
      <div className="palette__body">
        <div className="palette__search">
          <Icon name="search" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type a command or search…"
            aria-label="Search commands"
            aria-controls="palette-list"
            aria-activedescendant={results[index] ? `palette-item-${index}` : undefined}
            role="combobox"
            aria-expanded="true"
          />
          <kbd>Esc</kbd>
        </div>
        <ul id="palette-list" ref={listRef} className="palette__list" role="listbox">
          {results.length === 0 && <li className="palette__empty">No results for “{query}”</li>}
          {results.map((cmd, i) => {
            const header = cmd.group !== lastGroup ? cmd.group : null;
            lastGroup = cmd.group;
            return (
              <li key={`${cmd.group}-${cmd.label}`} role="presentation">
                {header && <div className="palette__group">{header}</div>}
                <button
                  type="button"
                  id={`palette-item-${i}`}
                  data-index={i}
                  role="option"
                  aria-selected={i === index}
                  className={`palette__item ${i === index ? "is-active" : ""}`}
                  onMouseMove={() => setIndex(i)}
                  onClick={() => run(cmd)}
                >
                  <Icon name={cmd.icon} size={16} />
                  <span>{cmd.label}</span>
                  <Icon name="arrowRight" size={14} className="palette__go" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </dialog>
  );
}
