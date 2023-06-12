import styled from "styled-components";

export const HomeSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .home__images {
    width: 1152px;
    position: relative;

    .home__table {
      margin-top: 85px;
      position: absolute;
      right: 0;
      z-index: 3;
    }

    .home__trevo {
      margin-top: 320px;
      position: absolute;
      right: 248px;
      z-index: 2;
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
