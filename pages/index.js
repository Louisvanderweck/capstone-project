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
    <main>
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
          productState={productType}
          productType={""}
          titel="Alle"
          onClick={() => updateFilter("")}
        />
        <Button
          productState={productType}
          productType={"ring"}
          titel="Ringe"
          onClick={() => updateFilter("ring")}
        />
        <Button
          productState={productType}
          productType={"nack"}
          titel="Ketten"
          onClick={() => updateFilter("nack")}
        />
        <Button
          productState={productType}
          productType={"earring"}
          titel="Ohrringe"
          onClick={() => updateFilter("earring")}
        />
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
    </main>
  );
}
