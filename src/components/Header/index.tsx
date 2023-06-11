"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Nunito } from "next/font/google";
import { HeaderContainer } from "./style";
import Link from "next/link";
import Image from "next/image";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "700"],
});

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/aboutus",
  },
  {
    name: "How it works",
    path: "/howitworks",
  },
  {
    name: "Categories",
    path: "/categories",
  },
  {
    name: "Testimony",
    path: "/testimony",
  },
];

function Header() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <HeaderContainer>
      <div className="header">
        <div className="header__logo">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} />
          <p className={`${nunito.className} header__title`}>WOODIES</p>
        </div>
        <div className={`${nunito.className} header__menu`}>
          {routes.map((route, index) => (
            <Link
              className={`${route.path == pathName && "selected"}`}
              key={index}
              href={route.path}
            >
              {route.name}
            </Link>
          ))}

          <button>SIGN UP</button>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
