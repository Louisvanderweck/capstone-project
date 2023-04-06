import { ButtonCounterContainer } from "../../styles";

const ButtonCounter = ({ titel, onClick }) => {
  return (
    <ButtonCounterContainer onClick={onClick}>{titel}</ButtonCounterContainer>
  );
};

export default ButtonCounter;
