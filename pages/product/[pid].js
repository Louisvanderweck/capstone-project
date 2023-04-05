import { useRouter } from "next/router";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";
import Button from "../../components/Button";
import LinkButton from "../../components/LinkButton";
import Image from "next/image";
import { useState, useEffect } from "react";
import ButtonCounter from "../../components/ButtonCounter";
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
              <Button
                variant={materialType === material ? "filled" : "outlined"}
                key={index}
                onClick={() => setMaterialType(material)}
              >
                {material}
              </Button>
            );
          })}
        </div>
        <div style={styles.counterbuttons}>
          <ButtonCounter titel={"-"} onClick={removeCount} />
          <ButtonCounter titel={counter} onClick={() => {}} />
          <ButtonCounter titel={"+"} onClick={addCount} />
        </div>
        <br />
        <div style={styles.cartButtonContainer}>
          <Button
            style={{ width: "100%" }}
            variant="filled"
            onClick={addToCart}
          >
            In den Warenkorb
          </Button>
          <LinkButton href="/warenkorb">Zum Warenkorb</LinkButton>
        </div>
      </div>
    </div>
  );
}

const styles = {
  cartButtonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    width: "100%",
    gap: 8,
  },
  materialButtons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  counterbuttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "20px",
  },
};
