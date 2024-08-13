"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3573535464.
const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearchInput = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault();
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative">
      <input
        placeholder="cari anime..."
        className="p-2 rounded-md w-full"
        ref={searchRef}
        onKeyDown={handleSearchInput}
      />
      <button className="absolute top-2 end-2" onClick={handleSearchInput}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};


export default InputSearch;
