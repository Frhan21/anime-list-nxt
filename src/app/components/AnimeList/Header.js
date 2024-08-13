import Link from "next/link";

const Header = ({title, linkRef, linkTitle}) => {
  return (
    <>
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Link
          href={linkRef}
          className="md:text-xl text-sm underline hover:text-indigo-400 transition-all"
        >
          {linkTitle}
        </Link>
      </div>
    </>
  );
};

export default Header;
