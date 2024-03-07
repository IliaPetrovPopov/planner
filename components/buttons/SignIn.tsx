"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    const userImage = session?.user?.image;
    return (
      <>
        <Link href={`/profile`}>
          <Image
            className={userImage ?? "rounded-full"}
            src={userImage ?? "/default-picture.png"}
            width={34}
            height={34}
            alt="Your Name"
          ></Image>
        </Link>
      </>
    );
  }

  return <button onClick={() => signIn()}>SignIn</button>;
}
