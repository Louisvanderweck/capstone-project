// const ButtonCounter = ({ titel, onClick, type }) => {
//   return (
//     <div
//       onClick={onClick}
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//         cursor: "pointer",

//         width: "50px",
//         height: "50px",
//         color: "gray",
//         textTransform: "uppercase",
//       }}
//     >
//       {titel}
//     </div>
//   );
// };

// export default ButtonCounter;
import styled from "styled-components";

const ButtonCounterContainer = styled.div`
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

const ButtonCounter = ({ titel, onClick, type }) => {
  return (
    <ButtonCounterContainer onClick={onClick}>{titel}</ButtonCounterContainer>
  );
};

export default ButtonCounter;
