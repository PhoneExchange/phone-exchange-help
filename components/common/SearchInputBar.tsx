"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "../ui/icons/MagnifyingGlassIcon";

type Props = {
  /** where to send the user, we'll append ?q= */
  target?: string; // e.g. "/support/search"
  placeholder?: string;
  autoFocus?: boolean;
  defaultValue?: string;
};

export function SearchInputBar({
  target = "/support/search",
  placeholder = "Search help articles…",
  autoFocus = false,
  defaultValue = "",
}: Props) {
  const router = useRouter();
  const [q, setQ] = useState(defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  const submit = () => {
    const term = q.trim();
    if (!term) return;
    const url = `${target}?q=${encodeURIComponent(term)}`;
    router.push(url);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="relative flex items-center"
      role="search"
      aria-label="Help Center search"
    >
      {/* input */}
      <input
        ref={inputRef}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setQ("");
            (e.target as HTMLInputElement).blur();
          }
        }}
        className="w-full rounded-sm border border-blue-200 bg-white/90 px-3 py-1 sm:px-5 sm:py-3 pr-24 text-sm sm:text-base shadow-sm placeholder:text-indigo-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200/60"
        placeholder={placeholder}
        aria-label="Search"
        autoComplete="off"
      />

      <div className="flex items-center absolute right-2">
        {q && (
          <button
            type="button"
            onClick={() => setQ("")}
            className="rounded-md p-1 text-blue-400 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
            aria-label="Clear search"
            title="Clear"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}

        <button
          type="submit"
          className="flex items-center rounded-lg bg-blue-600 px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          aria-label="Search"
        >
          <span className="inline-flex items-center gap-2">
            <MagnifyingGlassIcon size={17} />
            Search
          </span>
        </button>
      </div>
    </form>
  );
}
