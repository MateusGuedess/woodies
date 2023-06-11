"use client";

import React from "react";
import { Nunito } from "next/font/google";
import { HeaderContainer } from "./style";
import Link from "next/link";
import Image from "next/image";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "700"],
});

function Header() {
  return (
    <HeaderContainer>
      <div className="header">
        <div className="header__logo">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} />
          <p className={`${nunito.className} header__title`}>WOODIES</p>
        </div>
        <div className={`${nunito.className} header__menu`}>
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">How it works</Link>
          <Link href="/">Categories</Link>
          <Link href="/">Testimony</Link>
          <button>SIGN UP</button>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
