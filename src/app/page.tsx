"use client";

import Image from "next/image";
import { HomeSection } from "./style";

export default function Home() {
  return (
    <>
      <HomeSection>
        <div></div>
        <div className="home__images">
          <Image
            className={`home__table`}
            src="/table.svg"
            alt="table"
            width={568}
            height={577}
          />
          <Image
            className={`home__trevo`}
            src="/trevo.svg"
            alt="table"
            width={382}
            height={382}
          />
          <div className="home__background"></div>
        </div>
      </HomeSection>
    </>
  );
}
