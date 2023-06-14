import styled from "styled-components";

export const Container = styled.section`
  .product {
    background: #f9bdbd;
    width: 280px;
    height: 400px;
    border-bottom-left-radius: 30%;
    border-top-right-radius: 30%;
    display: flex;
    flex-direction: column;
    padding: 24px 19px;

    &__image {
      align-self: center;
      margin: 22px 0;
    }

    &__title {
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      line-height: 33px;
      color: #3e3f43;
      align-self: flex-start;
    }

    &__button {
      border: 1px solid #3e3f43;
      border-radius: 4px;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      text-align: center;
      color: #3e3f43;
      width: 123px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: self-end;
    }
  }
`;
