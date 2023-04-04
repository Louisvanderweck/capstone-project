import { useRouter } from "next/router";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";
import Button from "../../components/Button";
import Image from "next/image";
import { useState, useEffect } from "react";
import ButtonCounter from "../../components/ButtonCounter";
import ButtonMaterial from "../../components/ButtonMaterial";
// import SubmitButton from "../../components/SubmitButton";
import React from "react";

export default function ProductDetails() {
  const [counter, setCounter] = useState(0);
  const [materialType, setMaterialType] = useState("");

  // "platinum", "gold", "silver"

  const router = useRouter();
  const { pid } = router.query;
  const foundProduct = products.find((product) => product.id === Number(pid));

  function removeCount() {
    if (counter > 0) {
      setCounter((alterCounter) => alterCounter - 1);
    }
  }
  function addCount() {
    if (counter < 11) {
      setCounter((alterCounter) => alterCounter + 1);
    }
  }

  const selectedProducts = [];
  let selectedProduct;

  function addToCart() {
    selectedProduct = {
      product: foundProduct,
      material: materialType,
      amount: counter,
    };

    selectedProducts.push(selectedProduct);
    console.log("selectedProducts", selectedProducts);
  }
  console.log("selectedProducts", selectedProducts);

  console.log(materialType);
  console.log(counter);

  if (!foundProduct) {
    return <p>Produkt nicht gefunden</p>;
  }
  return (
    <div>
      <div key={foundProduct.id} style={styles.container}>
        <Image
          alt={foundProduct.name}
          src={foundProduct.Image}
          width={"350"}
          height="300"
        />
        <h1>{foundProduct.name}</h1>
        <div>{foundProduct.description}</div>
        <div>{foundProduct.price}</div>
        {/* <div>{foundProduct.materials}</div> */}
        <br />
        <div style={styles.materialButtons}>
          {foundProduct.materials.map((material, index) => {
            return (
              <ButtonMaterial
                key={index}
                titel={material}
                onClick={() => setMaterialType(material)}
                materialType={materialType}
              />
            );
          })}
        </div>
        <div style={styles.counterbuttons}>
          <ButtonCounter titel={"-"} onClick={removeCount} />
          <ButtonCounter titel={counter} onClick={() => {}} />
          <ButtonCounter titel={"+"} onClick={addCount} />
        </div>
        <br />
        <div style={{ width: 400 }}>
          <Button titel={"In den Warenkorb"} onClick={addToCart} />
          <Button titel={"Zum Warenkorb"} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    width: "100%",
  },
  materialButtons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  counterbuttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "20px",
  },
};
