import Heading from "../components/Heading";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import Link from "next/link";

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: "40px",
        }}
      >
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
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => {
          return (
            <Link href={`/product/${product.id}`} key={product.id}>
              <ProductCard key={product.id} product={product} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
