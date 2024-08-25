import Link from "next/link";
import InputSearch from "./InputSearch";
import UserAction from "./UserAction";

const Navbar = () => {
  return (
    <>
      <div>
        <header>
          <div className="bg-color-accent md:items-center p-4 flex md:flex-row flex-col justify-between gap-2">
            <Link href="/" className="font-bold text-2xl text-white">
              Cuy Anime List
            </Link>
            <div className="flex md:flex-row flex-col gap-4">
              <InputSearch />
              <UserAction />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
