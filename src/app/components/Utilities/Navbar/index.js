import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <>
      <div>
        <header>
          <div className="bg-indigo-500 p-4 flex md:flex-row flex-col justify-between gap-2">
            <Link href="/" className="font-bold text-2xl text-white">Cuy Anime List</Link>
            <InputSearch/>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
