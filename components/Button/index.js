// const Button = ({ productState, productType, titel, onClick, type }) => {
//   return (
//     <div
//       onClick={onClick}
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//         backgroundColor:
//           productState === productType ? "rgb(203, 180, 188)" : "",
//         border: "2px solid rgb(203, 180, 188)",
//         borderRadius: "20px",
//         flex: 1,
//         height: "50px",
//         color: "gray",
//         textTransform: "uppercase",
//       }}
//     >
//       {titel}
//     </div>
//   );
// };

// export default Button;
import styled from "styled-components";

const Button = styled.button`
  min-width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) =>
    props.variant === "filled" ? "rgb(203, 180, 188)" : ""};
  border: 2px solid rgb(203, 180, 188);
  border-radius: 20px;
  flex: 1;
  padding: 12px;
  color: gray;
  text-transform: uppercase;
`;

// const Button = ({ productState, productType, titel, onClick, type }) => {
//   return (
//     <ButtonContainer
//       variant={productState === productType ? "filled" : "outlined"}
//       onClick={onClick}
//     >
//       {titel}
//     </ButtonContainer>
//   );
// };

export default Button;
