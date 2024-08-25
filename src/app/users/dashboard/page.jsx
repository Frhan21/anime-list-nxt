import { authUserSession } from "@/app/libs/user.libs";
import Image from "next/image";

const Page = async () => {
  const user = await authUserSession();
  return (
    <>
      <div className="text-color-primary">
        <h3>Dashboard</h3>
        <p>Welcome {user.name}</p>
        <Image src={user.image} alt="..." width={250} height={250} />
      </div>
    </>
  );
};

export default Page;
