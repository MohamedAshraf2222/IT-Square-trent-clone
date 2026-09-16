"use client";
import { useState } from "react";

export default function Switch() {
  const [on, setOn] = useState(false);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => setOn(!on)}
      className={`
        relative flex items-center h-5 w-8 shrink-0 cursor-pointer
        rounded-full border border-border
        transition-colors duration-200 ease-in-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2
        ${!on ? "bg-primary-700" : "bg-neutral-300"}
      `}
    >
      <span
        className={`
          pointer-events-none inline-block h-4 w-4
          rounded-full bg-[#736e67] shadow-[0_2px_4px_#0000001a]
          transform transition-transform duration-200 ease-in-out
          ${on ? "-translate-x-3.5" : "translate-x-0"}
        `}
      />
    </button>
  );
}
