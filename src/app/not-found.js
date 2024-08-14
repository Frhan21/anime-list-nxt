"use client";
import Link from "next/link";
import { FileSearch } from "@phosphor-icons/react";

const NotFound = () => {
  return (
    <>
      <div className="min-h-screen max-w-xl mx-auto flex items-center justify-center flex-col">
        <FileSearch size={64} className="text-color-accent" />
        <div className="mt-2 text-color-accent text-2xl font-light">
          <span>404 | </span>
          <span className="text-color-accent font-bold text-2xl bg-color-dark">
            Not Found
          </span>
        </div>
          <Link className="text-color-dark p-2 rounded-md text-sm font-light mt-4 bg-color-accent border border-color-accent hover:bg-color-dark hover:text-color-accent transition-all" href="/">Kembali</Link>
      </div>
    </>
  );
};

export default NotFound;
