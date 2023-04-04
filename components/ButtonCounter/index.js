const ButtonCounter = ({ titel, onClick, type }) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",

        width: "50px",
        height: "50px",
        color: "gray",
        textTransform: "uppercase",
      }}
    >
      {titel}
    </div>
  );
};

export default ButtonCounter;
