import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .header {
    display: flex;
    width: 1152px;
    margin-top: 23px;

    .header__logo {
      display: flex;
      margin-left: 80px;

      .header__title {
        font-weight: 700;
        font-size: 24px;
        font-style: normal;
        line-height: 33px;
        letter-spacing: 0.25em;
        color: #3e3f43;
        margin-left: 8px;
      }
    }
    .header__menu {
      display: flex;
      align-items: center;
      margin-left: 115px;
      justify-content: space-between;
      width: 100%;
      margin-right: 28px;

      a {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: rgba(34, 34, 34, 0.75);
      }

      button {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #3e3f43;
        border: 1px solid #3e3f43;
        border-radius: 8px;
        width: 137px;
        height: 40px;
      }
    }
  }
`;
