const Button = ({ productState, productType, titel, onClick, type }) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor:
          productState === productType ? "rgb(203, 180, 188)" : "",
        border: "2px solid rgb(203, 180, 188)",
        borderRadius: "20px",
        flex: 1,
        height: "50px",
        color: "gray",
        textTransform: "uppercase",
      }}
    >
      {titel}
    </div>
  );
};

export default Button;
