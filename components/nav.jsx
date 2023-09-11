"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Nav() {
  const currentPath = usePathname();
  return (
    <>
      <div className="nav flex gap-4 py-2">
        <Link
          className={
            currentPath == "/" ? "border-b-2 px-2" : "hover:border-b-2 px-2"
          }
          href="/"
        >
          Home
        </Link>
        <Link
          className={
            currentPath == "/aboutme"
              ? "border-b-2 px-2"
              : "hover:border-b-2 px-2"
          }
          href="/aboutme"
        >
          About me
        </Link>
        <Link
          className={
            currentPath == "/portofolio"
              ? "border-b-2 px-2"
              : "hover:border-b-2 px-2"
          }
          href="/portofolio"
        >
          Portofolio
        </Link>
      </div>
    </>
  );
}

export default Nav;
