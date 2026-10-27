"use client";

/* Window title bar. Clicking it (or the close box) rolls the window up into
   the bar, classic Mac OS window-shade style. */
export function TitleBar({ title, dark }: { title: string; dark?: boolean }) {
  const toggle = (e: React.SyntheticEvent<HTMLElement>) => {
    e.stopPropagation();
    e.currentTarget.closest(".window")?.toggleAttribute("data-shaded");
  };
  return (
    <div className={`titlebar ${dark ? "dark" : ""}`} onClick={toggle} title="roll up">
      <button type="button" className="closebox" aria-label="roll the window up or down" onClick={toggle} />
      <span className="title" aria-hidden="true">
        {title}
      </span>
    </div>
  );
}
