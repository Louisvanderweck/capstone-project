import { useRouter } from "next/router";
import { products } from "../../data/products";
import LinkButton from "../../components/LinkButton";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import { Button, ButtonCounter } from "../../styles";
import styled from "styled-components";

export default function ProductDetails() {
  const [counter, setCounter] = useState(0);
  const [materialType, setMaterialType] = useState("");

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

  if (!foundProduct) {
    return <p>Produkt nicht gefunden</p>;
  }
  return (
    <PageContainer key={foundProduct.id}>
      <Image
        alt={foundProduct.name}
        src={foundProduct.Image}
        width={"350"}
        height="300"
      />
      <h1>{foundProduct.name}</h1>
      <div>{foundProduct.description}</div>
      <div>{foundProduct.price}</div>
      <br />
      <MaterialButtonsContainer>
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
      </MaterialButtonsContainer>
      <CounterButtonsContainer>
        <ButtonCounter onClick={removeCount}>-</ButtonCounter>
        <ButtonCounter onClick={() => {}}>{counter}</ButtonCounter>
        <ButtonCounter onClick={addCount}>+</ButtonCounter>
      </CounterButtonsContainer>
      <br />
      <CardButtonContainer>
        <Button style={{ width: "100%" }} variant="filled">
          In den Warenkorb
        </Button>
        <LinkButton href="/warenkorb">Zum Warenkorb</LinkButton>
      </CardButtonContainer>
    </PageContainer>
  );
}

const CardButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  width: 100%;
  gap: 8px;
`;

const MaterialButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const CounterButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 20px;
`;
