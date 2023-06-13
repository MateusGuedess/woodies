import React from "react";
import { HomeSection } from "./style";
import Image from "next/image";

function Home() {
  return (
    <HomeSection>
      <div className="home__text">
        <p className="home__description">
          Are you looking for <strong>woodden furniture</strong> for your place?
        </p>
        <h2 className="home__title">This is the Right Place</h2>
        <button className="home__button">Explore Furniture</button>
      </div>
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
  );
}

export default Home;
