import styled from "styled-components";
import Link from "next/link";

const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(203, 180, 188);
  border: 2px solid rgb(203, 180, 188);
  border-radius: 20px;
  flex: 1;
  height: 50px;
  color: gray;
  padding: 12px;
  text-transform: uppercase;
  text-decoration: none;
`;

export default LinkButton;
