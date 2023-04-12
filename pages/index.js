import Heading from "../components/Heading";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useState } from "react";
import {
  StyledLink,
  StyledFilterContainer,
  StyledMainContainer,
  Button,
} from "../styles";

export default function Home() {
  const [productType, setProductType] = useState("");

  function updateFilter(type) {
    setProductType(type);
  }

  const filteredProducts = products.filter(
    (product) => product.type === productType || productType === ""
  );
  return (
    <>
      <Heading>I + J van der Weck</Heading>

      <StyledFilterContainer>
        <Button
          variant={productType === "" ? "filled" : "outlined"}
          onClick={() => updateFilter("")}
        >
          Alle
        </Button>
        <Button
          variant={productType === "ring" ? "filled" : "outlined"}
          onClick={() => updateFilter("ring")}
        >
          Ringe
        </Button>
        <Button
          variant={productType === "nack" ? "filled" : "outlined"}
          onClick={() => updateFilter("nack")}
        >
          Ketten
        </Button>
        <Button
          variant={productType === "earring" ? "filled" : "outlined"}
          onClick={() => updateFilter("earring")}
        >
          Ohrringe
        </Button>
      </StyledFilterContainer>
      <StyledMainContainer>
        {filteredProducts.map((product) => {
          return (
            <StyledLink
              href={`/product/${product.id}`}
              key={product.id}
              style={{ width: "100%" }}
            >
              <ProductCard key={product.id} product={product} />
            </StyledLink>
          );
        })}
      </StyledMainContainer>
    </>
  );
}
