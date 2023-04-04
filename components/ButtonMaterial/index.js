import { useState, useEffect } from "react";

const ButtonMaterial = ({ titel, onClick, materialType }) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: materialType === titel ? "rgb(203, 180, 188)" : "",
        border: "2px solid rgb(203, 180, 188)",
        borderRadius: "20px",
        width: "150px",
        height: "50px",
        color: "gray",
        textTransform: "uppercase",
      }}
    >
      {titel}
    </div>
  );
};

export default ButtonMaterial;
