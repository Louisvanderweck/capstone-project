const Button = ({ titel, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid black",
        width: "150px",
        height: "50px",
      }}
    >
      {titel}
    </div>
  );
};

export default Button;
