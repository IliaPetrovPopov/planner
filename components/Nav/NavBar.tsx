"use client";

import { useSession } from "next-auth/react";
import SignIn from "../buttons/SignIn";
import SignOut from "../buttons/SignOut";

export default function NavBar() {
  const { status } = useSession();
  return (
    <nav className="h-15 bg-green-600 p-5 m-5">
      <ul>
        <li>
          <SignIn />
        </li>
        <li>{status === "authenticated" && <SignOut />}</li>
      </ul>
    </nav>
  );
}
