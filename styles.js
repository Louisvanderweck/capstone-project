import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
    display: flex;
    justify-content: center;
    padding: 0 8px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
`;

export const ButtonCounter = styled.button`
  background-color: transparent;
  font-size: 1rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: gray;
  text-transform: uppercase;
`;

export const StyledFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  margin: 0 auto;
  justify-content: space-between;
`;

export const Button = styled.button`
  min-width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) =>
    props.variant === "filled" ? "rgb(203, 180, 188)" : ""};
  border: 2px solid rgb(203, 180, 188);
  border-radius: 20px;
  padding: 12px 0;
  color: gray;
  text-transform: uppercase;
  @media (min-width: 768px) {
    min-width: 120px;
  }
`;

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
`;
export const ProductCardContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 550px;
`;

export const ProductName = styled.h2`
  font-size: 24px;
  text-decoration: none;
`;

export const ProductImage = styled.div`
  object-fit: contain;
  width: 200px;
  height: 200px;
`;
