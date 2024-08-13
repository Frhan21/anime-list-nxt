import Link from "next/link";

const Header = ({ title, linkRef, linkTitle }) => {
  return (
    <>
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
        {linkTitle && linkRef ? (
          <Link
            href={linkRef}
            className="md:text-xl text-sm underline text-color-primary hover:text-color-accent  transition-all"
          >
            {linkTitle}
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default Header;
