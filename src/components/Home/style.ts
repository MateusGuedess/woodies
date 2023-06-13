import styled, { keyframes } from "styled-components";

const move = keyframes`
  from {
    transform: translateY(-10px);
  }

  to {
    transform: translateY(10px);
  }
`;

export const HomeSection = styled.div`
  width: 1152px;
  display: flex;
  justify-content: center;
  position: relative;

  .home__text {
    margin-top: 137px;
    width: 504px;
    left: 102px;
    position: absolute;
    gap: 16px;
    display: flex;
    flex-direction: column;

    .home__description {
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 49px;
      color: #3e3f43;
    }

    .home__title {
      font-style: normal;
      font-weight: 700;
      font-size: 72px;
      line-height: 98px;
      color: #313235;
    }

    .home__button {
      width: 175px;
      height: 50px;
      background: #daa520;
      border-radius: 4px;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      color: #ffffff;
      transition: 500ms;

      &:hover {
        transform: scale(1.1) translateX(15px);
      }
    }
  }

  .home__images {
    width: 100%;

    .home__table {
      margin-top: 85px;
      position: absolute;
      right: 0;
      z-index: 3;
      animation: ${move} 2s ease infinite alternate;
    }

    .home__trevo {
      margin-top: 320px;
      position: absolute;
      right: 248px;
      z-index: 2;
      animation: ${move} 2s ease infinite alternate-reverse;
    }

    .home__background {
      position: absolute;
      width: 370px;
      height: 880px;
      left: 782px;
      top: -80px;
      right: 0;
      z-index: -1;
      background: #f9bdbd;
      border-bottom-left-radius: 147px;
    }
  }
`;
