"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "../ui/icons/MagnifyingGlassIcon";
import { SearchInputBar } from "../common/SearchInputBar";

type Props = {
  /** where to send the user, we'll append ?q= */
  target?: string; // e.g. "/support/search"
  placeholder?: string;
  autoFocus?: boolean;
  defaultValue?: string;
};

export function HomeSearchBar({ ...props }: Props) {
  return (
    <div className="px-3 sm:px-12 py-4 bg-white max-w-2xl mx-auto rounded-sm shadow-sm space-y-2">
      <h3 className="text-gray-800 text-lg font-semibold">Looking for help?</h3>
      <SearchInputBar {...props} />
    </div>
  );
}
