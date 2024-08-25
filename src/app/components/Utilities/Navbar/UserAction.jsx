import Link from "next/link";
import { authUserSession } from "@/app/libs/user.libs";

const UserAction = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionLink = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex gap-4 md:text-md text-sm">
      {user ? (
        <>
          <span className="text-color-dark px-2 py-2">Welcome {user.name}</span>
          <Link
            href="/users/dashboard"
            className="bg-color-dark border-2 rounded-md border-color-dark text-color-accent px-4 py-2 hover:bg-color-accent hover:text-color-dark transition-all duration-200"
          >
            Dashboard
          </Link>
        </>
      ) : null}
      <Link
        href={actionLink}
        className="bg-color-dark border-2 rounded-md border-color-dark text-color-accent px-4 py-2 hover:bg-color-accent hover:text-color-dark transition-all duration-200 inline-block"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserAction;
